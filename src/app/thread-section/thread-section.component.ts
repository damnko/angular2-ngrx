import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ApllicationState } from '../store/application-state';
import { ThreadsService } from '../services/threads.service';
import { LoadUserThreadsAction } from '../store/actions';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  constructor(
    private threadService: ThreadsService,
    // store containing the application state
    private store: Store<ApllicationState>
  ) {
    // store is simply an observable of the current application state
    store.subscribe(
      console.log
    );
  }

  ngOnInit() {
    this.threadService.loadUserThreads()
      .subscribe(
        allUserData => this.store.dispatch(
          new LoadUserThreadsAction(allUserData)
        )
      );
  }

}
