import "./App.module.css";
import { Header } from "./components/header/header";
import { AppContextProvider } from "./context/AppContext";
import "./global.css";
import { Page } from "./pages/page";
import styles from "./App.module.css";

export function App() {
  return (
    <AppContextProvider>
      <Header />
      <div className={styles.wrapper}>
        <Page />
      </div>
    </AppContextProvider>
  );
}
