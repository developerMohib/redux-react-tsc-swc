import { Button } from "@/components/ui/button";
import { decrement, increment } from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const Home = () => {
    const count = useAppSelector((state: RootState) => state.counter.count)
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

            <div className='text-center'>
                <div>
                    <h2> This is Redux explaining tour </h2>
                </div>

                <div>
                    <div className='bg-orange-200 flex justify-around'>
                        <Button
                            aria-label="Increment value"
                            onClick={() => handleIncrement(2)}
                        >
                            Increment
                        </Button>
                        <span  >{count}</span>
                        <Button
                            aria-label="Decrement value"
                            onClick={() => handleDecrement(2)}
                        >
                            Decrement
                        </Button>
                    </div>
                    <Button
                        className="my-10"
                        aria-label="Increment value"
                        onClick={() => handleIncrement(5)}
                    >
                        Increment by 5
                    </Button>
                </div>

            </div>



        </main>
    );
};

export default Home;