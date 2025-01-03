
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice'
import { RootState } from './redux/store'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state : RootState) => state.count)
  console.log(count)

  return (
    <>
      <h2> This is Redux explaining tour </h2>

      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>

    </>
  )
}

export default App
