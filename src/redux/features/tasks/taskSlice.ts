import { ITask } from "@/interface/taskInterface";
import { RootState } from "@/redux/store";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
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
      dueDate: "11-01-2025",
      isCompleted: false,
      priority: "Low",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addATask: (state, action: PayloadAction<ITask>) => {
      const id = nanoid();
      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };
      state.task.push(taskData);
    },
  },
});

export const selectTask = (state: RootState) => {
  return state.tasks.task;
};
export const { addATask } = taskSlice.actions;
export default taskSlice.reducer;
