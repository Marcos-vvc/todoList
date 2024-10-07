import styles from './Header.module.css'

interface NavbarProps {
  onLogout: () => void
}

export function Header({ onLogout }: NavbarProps) {
  return (
    <div>
      <header className={styles.header}>
        <h2>Lista de Tarefas</h2>
      </header>
      <button className={styles.button} onClick={onLogout}>
        Sair
      </button>
    </div>
  )
}
