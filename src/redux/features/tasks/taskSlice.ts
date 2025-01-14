import { ITask } from "@/interface/taskInterface";
import { RootState } from "@/redux/store";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
interface IinitialState {
  task: ITask[];
  filter: "All" | "High" | "Medium" | "Low";
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
  filter: "All",
};

type DrafData = Pick<ITask, "title" | "description" | "dueDate" | "priority">;
const createTask = (taskFormData: DrafData) => {
  return { id: nanoid(), isCompleted: false, ...taskFormData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addATask: (state, action: PayloadAction<ITask>): void => {
      const taskData = createTask(action.payload);
      state.task.push(taskData);
    },
    completeTask: (state, action: PayloadAction<string>): void => {
      state.task.forEach((singleTask) => {
        if (
          singleTask.id === action.payload &&
          singleTask.isCompleted !== true
        ) {
          singleTask.isCompleted = true;
        }
      });
    },
    deleteTask: (state, action: PayloadAction<string>): void => {
      state.task = state.task.filter(
        (singleTask) => singleTask.id !== action.payload
      );
    },
    updateTask: (state, action) => {
      const { id, title, description, dueDate, prority } = action.payload;
      state.task.forEach((singleTask) => {
        if (singleTask.id === id) {
          singleTask.title = title;
          singleTask.description = description;
          singleTask.dueDate = dueDate;
          singleTask.priority = prority;
        }
      });
    },
    filterTask: (
      state,
      action: PayloadAction<"All" | "High" | "Medium" | "Low">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTask = (state: RootState) => {
  const filerTasks = state.tasks.task; // Assuming this is an array of tasks
  const filter = state.tasks.filter; // Assuming this is a string like "High", "Medium", or "Low"

  if (filter === "High") {
    return filerTasks.filter((task) => task.priority === "High");
  } else if (filter === "Medium") {
    return filerTasks.filter((task) => task.priority === "Medium");
  } else if (filter === "Low") {
    return filerTasks.filter((task) => task.priority === "Low");
  } else {
    return filerTasks;
  }
};
export const { addATask, completeTask, deleteTask, updateTask, filterTask } =
  taskSlice.actions;
export default taskSlice.reducer;
