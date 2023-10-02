import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import ThemeProvider from './context/ThemeProvider'


function App() {

  return (
    <div>
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </div>
  )
}

export default App
