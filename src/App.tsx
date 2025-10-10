import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { EstiloGlobal } from './style'
import Home from './Pages/Home'
import Trattoria from './Pages/Trattoria'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/trattoria',
    element: <Trattoria />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={rotas} />
      <EstiloGlobal />
    </>
  )
}

export default App
