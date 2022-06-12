import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const rootReducer = combineReducers({
  app: toolkitSlice,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export const persister = persistStore(store);
