import styles from './App.module.css'
import { Profile } from './components/Profile/Profile'
import { AppContextProvider } from './context/AppContext'
import './global.css'
import { Page } from './pages/page'

export function App() {
  return (
    <AppContextProvider>
      <div className={styles.wrapper}>
        <Profile />
        <Page />
      </div>
    </AppContextProvider>
  )
}
