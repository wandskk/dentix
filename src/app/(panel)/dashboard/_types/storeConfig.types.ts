import { store } from "../_store/storeConfig";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
