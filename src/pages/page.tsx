import { PlusCircle } from '@phosphor-icons/react'
import styles from './Page.module.css'
import { useState, useContext } from 'react'
import { List } from '../components/list/list'
import Clip from '../assets/Clipboard.png'
import { AppContext } from '../context/AppContext'
import { Header } from '../components/header/header'

export function Page() {
  const [tasks, setTasks] = useState<string[]>([])
  const [tasksCount, setTaskCount] = useState(0)
  const [tasksText, setTasksText] = useState('')
  const { completedTasksCount } = useContext(AppContext)

  function handleTasksAdd() {
    if (tasksText.trim() === '') {
      return
    }

    if (tasks.includes(tasksText)) {
      return
    }

    setTasks([...tasks, tasksText])
    setTaskCount((prevCount) => prevCount + 1)
    setTasksText('')
  }

  function deleteTasks(tasksToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== tasksToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  const lowerSearch = tasksText.toLowerCase()

  const tasksFilter = tasks.filter((task) => {
    return task.toLowerCase().includes(lowerSearch)
  })

  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={tasksText}
            onChange={(e) => setTasksText(e.target.value)}
            required
          />

          <button type="submit" onClick={handleTasksAdd}>
            Criar <PlusCircle size={18} color="#f2f2f2" />
          </button>
        </div>

        <div className={styles.containerViewCounts}>
          <p>
            Tarefas criadas <span>{tasksCount}</span>
          </p>
          <p>
            Concluídas{' '}
            <span>
              {completedTasksCount} de {tasksCount}
            </span>
          </p>
        </div>

        <div className={styles.containerTasksLists}>
          {tasksFilter.length > 0 ? (
            tasksFilter.map((task, index) => {
              return <List key={index} task={task} onDeleteTask={deleteTasks} />
            })
          ) : (
            <div className={styles.containerNoTasks}>
              <img src={Clip} alt="" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
