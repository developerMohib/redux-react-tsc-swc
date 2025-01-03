import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice'
import { RootState } from './redux/store'
import { useAppDispatch, useAppSelector } from './redux/hooks'

function App() {
  const count = useAppSelector((state: RootState) => state.count)
  const dispatch = useAppDispatch()
  console.log(count)

  // handle here
  const handleIncrement = (amount: number): void => {
    dispatch(increment(amount))
  }
  const handleDecrement = (amount: number) : void => {
    dispatch(decrement(amount))
  }

  return (
    <>
      <h2> This is Redux explaining tour </h2>

      <div>
        <div>
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
      </div>

    </>
  )
}

export default App
