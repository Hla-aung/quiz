import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Quiz from './Quiz.jsx'
import CheckAuth  from './CheckAuth.jsx'
import Result from './Result.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/quiz',
      element: <CheckAuth><Quiz /></CheckAuth>
    },
    {
      path: '/result',
      element: <CheckAuth><Result /></CheckAuth>
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
