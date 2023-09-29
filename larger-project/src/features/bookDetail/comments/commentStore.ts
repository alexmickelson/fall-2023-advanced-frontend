import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';

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
