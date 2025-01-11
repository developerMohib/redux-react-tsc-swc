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
  ],
};

type DrafData = Pick<ITask, "title" | "description" | "dueDate" | "priority">;
const createTask = (taskFormData: DrafData) => {
  return { id: nanoid(), isCompleted: false, ...taskFormData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addATask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.task.push(taskData);
    },
    completeTask: (state, action: PayloadAction<string>) => {
      console.log(action.payload)
      state.task.forEach((singleTask) => {
        if (singleTask.id === action.payload && singleTask.isCompleted !==true) {
          singleTask.isCompleted = true;
        }
      });
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      console.log(action.payload)
      state.task = state.task.filter((singleTask) => singleTask.id !== action.payload);
    },
  },
});

export const selectTask = (state: RootState) => {
  return state.tasks.task;
};
export const { addATask,completeTask,deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
