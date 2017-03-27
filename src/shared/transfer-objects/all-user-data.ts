import {
  Message,
  Participant,
  Thread
} from '../models';

// transfer object is an object generated only by the combination of
// existing models for the purpose of transferring data
export interface AllUserData {
  message: Message[];
  participant: Participant[];
  thread: Thread[];
}


// @ngrx/store
