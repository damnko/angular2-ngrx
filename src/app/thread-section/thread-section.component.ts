import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { ApplicationState } from '../store/application-state';
import { ThreadsService } from '../services/threads.service';
import { LoadUserThreadsAction } from '../store/actions';
import { Thread } from '../../shared/models/thread';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  username$: Observable<string>;
  unreadMessagesCounter$: Observable<number>;
  threadSummaries$: Observable<Thread[]>;

  constructor(
    private threadService: ThreadsService,
    // store containing the application state
    private store: Store<ApplicationState>
  ) {
    // store is simply an observable of the current application state
    this.username$ = store.select()
                      .skip(1) // the first iteration is the initial state of the store, which has undefined values
                      .map((appState: ApplicationState) => appState.storeData.participants[appState.uiState.userId].name); // get name of current user
    this.unreadMessagesCounter$ = store
      .skip(1)
      .map((appState: ApplicationState) => {
        return _.values(appState.storeData.threads).reduce((messagesNr, thread) => {
          messagesNr += (appState.uiState.userId in thread.participants) ? thread.participants[appState.uiState.userId] : 0;
          return messagesNr;
        }, 0);
      });

    // store.select gets a state and returns a "modified version of it"
    this.threadSummaries$ = store.select(state => {
      const threads = _.values<Thread>(state.storeData.threads);
      // I need to get a list of summaries of all the threads
      return threads.map((thread: Thread) => {
        const names = _.keys(thread.participants).map((participantId: number) => state.storeData.participants[participantId].name);
        const lastMessageId = _.last(thread.messageIds);
        return {
          id: thread.id,
          participantNames: names.join(', '),
          lastMessageText: state.storeData.messages[lastMessageId].text
        };
      });
    });
  }

  ngOnInit() {
    // when new data is received from the API, a new action is dispatched
    this.threadService.loadUserThreads()
      .subscribe(
        allUserData => this.store.dispatch(
          new LoadUserThreadsAction(allUserData)
        )
      );
  }

}
