import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodoItem {
  id: string,
  text: string,
  complete: boolean,
}

export interface TodoListState {
  items: TodoItem[]
}


const initialState: TodoListState = { items: [] };

export const todoListSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<{ items: TodoItem[] }>) => {
      state.items = action.payload.items
    },
  },
});

export const { setItems } = todoListSlice.actions;
