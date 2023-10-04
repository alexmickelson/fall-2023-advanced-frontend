import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ApiState {
  data: string
}

const initialState: ApiState = { data: ""};

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<{newString: string}>) => {
      state.data = action.payload.newString;
    },
  },
});

export const { setData } = apiSlice.actions;
