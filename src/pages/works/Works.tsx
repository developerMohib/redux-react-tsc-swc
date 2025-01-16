import { useGetTasksQuery } from "@/redux/api/baseApi";

const Works = () => {
    const { data,isLoading } = useGetTasksQuery(undefined)
    if(isLoading) {
        return <p>Loading....</p>
    }
    console.log('data',data)
    return (
        <div>
        <h1>hello   </h1>
        </div>
    );
};

export default Works;