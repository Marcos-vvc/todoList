import { Route, Routes } from 'react-router-dom'
import { Page } from './pages/page'
import { Signin } from './components/signin/Signin'
import { Login } from './components/login/Login'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Signin />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/page" element={<Page />}></Route>
    </Routes>
  )
}
