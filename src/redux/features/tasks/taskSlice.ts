import { ITask } from "@/interface/taskInterface";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
interface IinitialState {
  task: ITask[];
}
const initialState: IinitialState = {
  task: [
    {
      id: "asdfasd",
      title: "This is task one",
      description: "This is description",
      dueDate: "2025-1",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "asdfasdf",
      title: "This is task two",
      description: "This is description",
      dueDate: "2025-1",
      isCompleted: false,
      priority: "Medium",
    },
    {
      id: "asdfasdff",
      title: "This is task three",
      description: "This is description",
      dueDate: "2025-1",
      isCompleted: false,
      priority: "Low",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTask = (state: RootState) => {
  return state.tasks.task;
};

export default taskSlice.reducer;
