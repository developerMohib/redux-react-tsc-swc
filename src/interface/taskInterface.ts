export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
  assignto: string | null;
}
export interface IUsers {
  id: string;
  name: string;
}
export interface IProps {
  task: ITask;
}
