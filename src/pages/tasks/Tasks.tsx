import { AddTask } from "@/components/taskCard/AddTask";
import TaskCard from "@/components/taskCard/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { filterTask, selectTask } from "@/redux/features/tasks/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Tasks = () => {
    const tasks = useAppSelector(selectTask)
    const dispatch = useAppDispatch()
    return (
        <div>
            <AddTask />

            <Tabs defaultValue="All" className="w-1/2 mx-auto">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger onClick={() => dispatch(filterTask("All"))} value="All">All</TabsTrigger>
                    <TabsTrigger onClick={() => dispatch(filterTask("High"))} value="High">High</TabsTrigger>
                    <TabsTrigger onClick={() => dispatch(filterTask("Medium"))} value="Medium">Medium</TabsTrigger>
                    <TabsTrigger onClick={() => dispatch(filterTask("Low"))} value="Low">Low</TabsTrigger>
                </TabsList>
            </Tabs>

            {
                tasks.length > 0 ? tasks?.map(task =>
                    <TaskCard task={task} key={task.id} />) : "No Product Available"
            }
        </div>
    );
};

export default Tasks;