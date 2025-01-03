import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counter/counterSlice";
import taskReducer from "../redux/features/tasks/taskSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer, // This maps the `counter` slice to `counterReducer`
    tasks: taskReducer,       // This maps the `task` slice to `taskReducer`
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
