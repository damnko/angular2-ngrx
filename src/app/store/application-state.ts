// the application state is made up of the state of the UI
// and the data that is available to the app (the threads and messages
// related to the selected user)

import { StoreData, INITIAL_STORE_DATA } from './store-data';
import { UiState, INITIAL_UI_STATE } from './ui-state';

export interface ApplicationState {
  uiState: UiState;
  storeData: StoreData;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
  uiState: INITIAL_UI_STATE,
  storeData: INITIAL_STORE_DATA
};
