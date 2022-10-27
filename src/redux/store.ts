import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { addressApi } from "./api/api";
import userInputGlobalReducer from "./userInputSlice";


export const store = configureStore({
  reducer: {
    [addressApi.reducerPath]: addressApi.reducer,
    userInput: userInputGlobalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(addressApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
