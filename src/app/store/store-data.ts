// this is a small in memory database
// related to the currently selected user

import { Message, Participant, Thread } from '../../shared/models';

export interface StoreData {
  participants: {[key: number]: Participant};
  threads: {[key: number]: Thread};
  messages: {[key: number]: Message};
}

export const INITIAL_STORE_DATA: StoreData = {
  participants: {},
  threads: {},
  messages: {}
};
