import '@/App.css'
import { RouterProvider } from 'react-router'
import router from '@/config/routes'

function App() {

  return (
    <div className='w-full h-screen'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
