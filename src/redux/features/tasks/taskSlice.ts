import { ITask } from "@/interface/taskInterface";
import { createSlice } from "@reduxjs/toolkit";
interface IinitialState{
    task : ITask[];
}
const initialState : IinitialState = {
  task: [
    {
      id: "asdfasdf",
      title: "this is task one",
      description: "this is description",
      dueDate: "2025-1",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "asdfasdf",
      title: "this is task two",
      description: "this is description",
      dueDate: "2025-1",
      isCompleted: false,
      priority: "Medium",
    },
    {
      id: "asdfasdf",
      title: "this is task three",
      description: "this is description",
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

export default taskSlice.reducer;
