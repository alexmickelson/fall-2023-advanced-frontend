import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { todoListService } from './todoListService';
import { TodoItem, TodoCategory, TodoListState } from './models';




export const updateAndGetItemsThunk = createAsyncThunk(
  'todoItems/updateAndFetch',
  async ({ categoryId, items }: { categoryId: string, items: TodoItem[] }): Promise<TodoItem[]> => {
    await todoListService.storeTodoItems(categoryId, items)
    const itemsFromApi = await todoListService.getTodoItemsForCategory(categoryId)
    return itemsFromApi
  }
);

export const updateItemsThunk = createAsyncThunk(
  'todoItems/updateItems',
  async (categoryId: string) => {
    const itemsFromApi = await todoListService.getTodoItemsForCategory(categoryId)
    return { items: itemsFromApi, categoryId }
  }
);

export const fetchAllCategoriesThunk = createAsyncThunk(
  'todoItems/fetchAllCategories',
  async (): Promise<TodoCategory[]> => {
    const categoriesFromApi = await todoListService.getAllCategories()
    return categoriesFromApi
  }
);

export const fetchTodoItemsForCategoryThunk = createAsyncThunk(
  'todoItems/fetchTodoItemsForCategory',
  async (categoryId: string): Promise<TodoCategory> => {
    const itemsFromApi = await todoListService.getTodoItemsForCategory(categoryId)
    return { id: categoryId, name: '', items: itemsFromApi }
  }
);

const initialState: TodoListState = { categories: [], loading: false };

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

    })
    builder.addCase(updateItemsThunk.rejected, (state, action) => {
      state.loading = false
      // state.error = action.error.message
    })

  },
});

export const { setLoading } = todoListSlice.actions;
