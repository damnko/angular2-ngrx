// here I keep the state of the UI, the only elements available that make up the UI are
// the currently selected user and the currently selected thread

export interface UiState {
  userId: number;
  currentThreadId: number;
}

export const INITIAL_UI_STATE: UiState = {
  userId: undefined,
  currentThreadId: undefined
};
