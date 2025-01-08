import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counter/counterSlice";
import taskReducer from "../redux/features/tasks/taskSlice";
import quizReducer from "./features/quiz/quizSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer, // This maps the `counter` slice to `counterReducer`
    tasks: taskReducer, // This maps the `task` slice to `taskReducer`
    quizs: quizReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
