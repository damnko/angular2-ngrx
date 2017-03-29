import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule, Action } from '@ngrx/store';
import 'rxjs/add/operator/skip';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { ApplicationState, INITIAL_APPLICATION_STATE } from './store/application-state';
import { LOAD_USER_THREADS_ACTION } from './store/actions';

// this is the reducer
function storeReducer(state: ApplicationState, action: Action): ApplicationState {
  switch (action.type) {
    case LOAD_USER_THREADS_ACTION:
      loadUserThreadsAction(state, action);
    default:
      return state;
  }
}

function loadUserThreadsAction(state: ApplicationState, action: Action): ApplicationState {
  // I should never modify the existing state, so I create a copy of the state and modify it
  let stateCopy: ApplicationState = Object.assign({}, state);
  stateCopy.storeData = action.payload;
  return stateCopy;
}

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageSectionComponent,
    ThreadListComponent,
    ThreadSectionComponent,
    UserSelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // the initial state is sent when the app is first initialized and then
    // updated on each dispached event
    StoreModule.provideStore(storeReducer, INITIAL_APPLICATION_STATE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
