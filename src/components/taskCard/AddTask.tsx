import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "../ui/calendar"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { addATask } from "@/redux/features/tasks/taskSlice"
import { ITask } from "@/interface/taskInterface"
import { selectUsers } from "@/redux/features/users/userSlice"
import { useCreateWorkMutation } from "@/redux/api/baseApi"
import { nanoid } from "@reduxjs/toolkit"

export function AddTask() {
    const form = useForm()
    const dispatch = useAppDispatch()
    const users = useAppSelector(selectUsers)

    const [createWork, { data: workData }] = useCreateWorkMutation()

    const onSubmit: SubmitHandler<FieldValues> = (data): void => {
        dispatch(addATask(data as ITask))
        const taskData = { id: nanoid(), isCompleted: false, ...data }
        createWork(taskData)
    }
console.log(workData, 'kire bhai');
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add More Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Add More Task</DialogTitle>
                    <DialogDescription>
                        Make changes to your task here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Task Title</FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || " "} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Task Description</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} value={field.value || " "} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Date for task */}
                        <FormField
                            control={form.control}
                            name="dueDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Due Date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date < new Date()
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormItem>
                            )}
                        />

                        {/* Here task priority */}
                        <FormField
                            control={form.control}
                            name="priority"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Task Priority </FormLabel>
                                    <FormControl>
                                        <Select onValueChange={(value) => field.onChange(value)} defaultValue={field.value}>
                                            <SelectTrigger >
                                                <SelectValue placeholder="Select priority" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Priority </SelectLabel>
                                                    <SelectItem value="High">High</SelectItem>
                                                    <SelectItem value="Medium">Medium</SelectItem>
                                                    <SelectItem value="Low">Low</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* who assign task */}
                        <FormField
                            control={form.control}
                            name="assignto"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Assign to</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={(value) => field.onChange(value)} defaultValue={field.value}>
                                            <SelectTrigger >
                                                <SelectValue placeholder="Select priority" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel >Assign to </SelectLabel>
                                                    {
                                                        users ? (users.map(user => (
                                                            <SelectItem value={user.id} > {user.name} </SelectItem>
                                                        ))) : "Please add user"
                                                    }
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>

                </Form>

            </DialogContent>
        </Dialog>
    )
}
