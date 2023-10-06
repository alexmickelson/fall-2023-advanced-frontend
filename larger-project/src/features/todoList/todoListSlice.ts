import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { todoListService } from './todoListService';
import { useDispatch } from 'react-redux';
import { act } from 'react-dom/test-utils';

export interface TodoItem {
  id: string,
  text: string,
  complete: boolean,
}

export interface TodoListState {
  items: TodoItem[],
  loading: boolean
}


export const updateAndGetItemsThunk = createAsyncThunk(
  'todoItems/updateAndFetch',
  async (items: TodoItem[]): Promise<TodoItem[]> => {
    await todoListService.storeTodoItems(items)
    const itemsFromApi = await todoListService.getTodoItems()
    return itemsFromApi
  }
);

export const updateItemsThunk = createAsyncThunk(
  'todoItems/updateItems',
  async (): Promise<TodoItem[]> => {
    const itemsFromApi = await todoListService.getTodoItems()
    return itemsFromApi
  }
);

const initialState: TodoListState = { items: [], loading: false };

export const todoListSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateAndGetItemsThunk.pending, (state) => {
      state.loading = true
    })
    builder.addCase(updateAndGetItemsThunk.fulfilled, (state, action) => {
      state.loading = false
      state.items = action.payload
    })
    builder.addCase(updateAndGetItemsThunk.rejected, (state, action) => {
      state.loading = false
      // state.error = action.error.message
    })
    builder.addCase(updateItemsThunk.pending, (state) => {
      state.loading = true
    })
    builder.addCase(updateItemsThunk.fulfilled, (state, action) => {
      state.loading = false
      state.items = action.payload
    })
    builder.addCase(updateItemsThunk.rejected, (state, action) => {
      state.loading = false
      // state.error = action.error.message
    })
  },
});

export const { setLoading } = todoListSlice.actions;
