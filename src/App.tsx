import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default App
