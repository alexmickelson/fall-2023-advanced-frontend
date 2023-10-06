import { AnyAction, Dispatch, ThunkDispatch, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { commentSlice } from "./features/bookDetail/comments/commentSlice";
import { todoListSlice } from "./features/todoList/todoListSlice";

const store = configureStore({
  reducer: {
    comments: commentSlice.reducer,
    todo: todoListSlice.reducer
  },
});

export default store;

export type AppDispatch = ThunkDispatch<typeof store.dispatch, null | undefined, AnyAction> &
  Dispatch<AnyAction>;
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector