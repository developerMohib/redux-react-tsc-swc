import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <main className='px-10'>
      <Navbar />
      <div className='max-w-screen-xl mx-auto'>
        <Outlet />
      </div>
    </main>
  )
}

export default App
