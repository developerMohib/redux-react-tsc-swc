import { Button } from "@/components/ui/button";
import { decrement, increment } from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const Home = () => {
    const count = useAppSelector((state: RootState) => state.count)
    const dispatch = useAppDispatch()
    console.log(count)

    // handle here
    const handleIncrement = (amount: number): void => {
        dispatch(increment(amount))
    }
    const handleDecrement = (amount: number): void => {
        dispatch(decrement(amount))
    }
    return (
        <main>
            <div className='flex h-screen justify-center items-center'>
                <h2> This is Redux explaining tour </h2>
                <div className='bg-orange-200'>
                    <button
                        aria-label="Increment value"
                        onClick={() => handleIncrement(2)}
                    >
                        Increment
                    </button>
                    <span>{count}</span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => handleDecrement(2)}
                    >
                        Decrement
                    </button>
                </div>
                <button
                    aria-label="Increment value"
                    onClick={() => handleIncrement(5)}
                >
                    Increment by 5
                </button>
                <Button>here click me</Button>
            </div>
        </main>
    );
};

export default Home;