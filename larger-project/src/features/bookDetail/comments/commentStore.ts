import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export interface Comment {
  bookID: string;
  comment: string;
  id: string;
}

export interface CommentState {
  comments: Comment[];
}

const initialState: CommentState = { comments: [] };

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<{ bookID: string, comment: string }>) => {
      state.comments.push({ ...action.payload, id: crypto.randomUUID() });
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      state.comments.splice(action.payload, 1);
    },
  },
});

export const { addComment, deleteComment } = commentSlice.actions;

const store = configureStore({
  reducer: commentSlice.reducer,
});

export default store;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector