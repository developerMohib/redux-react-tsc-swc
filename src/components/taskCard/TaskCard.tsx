import { IProps } from "@/interface/taskInterface";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";
import { useAppDispatch } from "@/redux/hooks";
import { completeTask, deleteTask, updateTask } from "@/redux/features/tasks/taskSlice";
import UpdateTask from "./UpdateTask";


const TaskCard = ({ task }: IProps) => {
    const dispatch = useAppDispatch()
    return (
        <div className="mt-4">
            <div className="grid grid-cols-2 gap-4 bg-white border border-gray-300 rounded-xl overflow-hidden" >
                <div className="grid-cols-1 flex items-center justify-start gap-x-5">
                    <div className={cn("relative w-32 h-32", { "bg-green-500": task.priority === "High", "bg-orange-400": task.priority === "Medium", "bg-red-400": task.priority === "Low" })}>
                    </div>

                    <div>
                        <p className="text-xl font-bold">{task.title}</p>

                        <p className="text-gray-500">
                            {task.description}
                        </p>
                        {/* <p> {task.dueDate} </p> */}
                        <span className={cn(
                            "text-xs font-semibold",
                            task.priority === "High" ? "text-green-500" : "",
                            task.priority === "Medium" ? "text-orange-500" : "",
                            task.priority === "Low" ? "text-blue-500" : ""
                        )}>Priority : {task.priority} </span>
                        <span className="flex items-center justify-start text-gray-500">
                            <svg className="w-4 h-4 mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                            </svg>
                            <a href="mohibullah-mohim.vercel.app" className={cn("text-blue-500 hover:text-orange-400")} target="_blank">mohibullah mohim web</a>
                        </span>
                    </div>
                </div>

                <div className="grid-cols-1 space-x-5 flex items-center">
                    <Checkbox disabled={task.isCompleted} onClick={() => dispatch(completeTask(task.id))} />
                    <button onClick={() => dispatch(deleteTask(task.id))} > delete </button>
                    <button onClick={() => dispatch(updateTask(task))} > update </button>
                    <UpdateTask singleTask={task} />
                </div>
            </div>
        </div>
    );
};

export default TaskCard;