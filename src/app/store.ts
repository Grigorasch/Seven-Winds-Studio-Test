import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/projects/projectsSlice";

export const store = configureStore({
    reducer: {
        projects: productsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;