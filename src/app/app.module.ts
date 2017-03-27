import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { INITIAL_APPLICATION_STATE } from './store/application-state';

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
    StoreModule.provideStore({}, INITIAL_APPLICATION_STATE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
