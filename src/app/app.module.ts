import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';

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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
