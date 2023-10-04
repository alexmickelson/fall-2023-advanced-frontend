import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { commentSlice } from "./features/bookDetail/comments/commentSlice";
import { apiSlice } from "./features/webRequests/apiSlice";

const store = configureStore({
  reducer: {
    comments: commentSlice.reducer,
    api: apiSlice.reducer
  },
});

export default store;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector