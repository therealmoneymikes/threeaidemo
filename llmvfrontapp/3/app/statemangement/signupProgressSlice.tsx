import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

// Initial State
interface IUserProgressState {
  progress: number;
}

const initialState: IUserProgressState = {
  progress: 0,
};

// Slice
const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    incrementProgress: (state, action: PayloadAction<number>) => {
      state.progress = Math.min(state.progress + action.payload, 100);
    },
    decrementProgress: (state, action: PayloadAction<number>) => {
      state.progress = Math.max(state.progress - action.payload, 0);
    },
    resetProgress: (state) => {
      state.progress = 0;
    },
  },
});

// Actions
export const { incrementProgress, decrementProgress, resetProgress } =
  progressSlice.actions;

export default progressSlice.reducer;
