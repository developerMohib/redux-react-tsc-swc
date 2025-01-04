import { AddTask } from "@/components/taskCard/AddTask";
import TaskCard from "@/components/taskCard/TaskCard";
import { selectTask } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {
    const tasks = useAppSelector(selectTask)
    console.log(tasks)
    return (
        <div>
            <AddTask />
            {tasks?.map(task => 
            <TaskCard task={task} key={task.id} />)}
        </div>
    );
};

export default Tasks;