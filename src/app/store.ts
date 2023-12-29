import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/projects/projectsSlice";
import { dataApi } from "../services/api";

export const store = configureStore({
    reducer: {
        projects: productsReducer,
        [dataApi.reducerPath]: dataApi.reducer
    },
    middleware: (getDefaulMiddleware) => getDefaulMiddleware().concat(dataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;