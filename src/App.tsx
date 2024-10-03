import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext'
import './global.css'
import { Router } from './Router'

export function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContextProvider>
  )
}
