import { PlusCircle } from '@phosphor-icons/react'
import styles from './Page.module.css'
import { useState, useContext, useEffect } from 'react'
import { List } from '../components/list/list'
import Clip from '../assets/Clipboard.png'
import { AppContext } from '../context/AppContext'
import { Header } from '../components/header/header'
import { useNavigate } from 'react-router-dom'
import { baseURL } from '../constants/baseURL'
import axios from 'axios'

interface Task {
  id: number
  description: string
}

export function Page() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [tasksCount, setTaskCount] = useState(0)
  const [tasksText, setTasksText] = useState('')
  const { completedTasksCount } = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTask = async () => {
      const token = localStorage.getItem('userToken')
      if (!token) {
        navigate('/login')
        return
      }

      try {
        const response = await axios.get(`${baseURL}/task`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setTasks(response.data)
      } catch (error) {
        console.log('Erro ao buscar tarefas:', error)
      }
    }

    fetchTask()
  }, [navigate])

  function handleTasksAdd() {
    if (tasksText.trim() === '') {
      return
    }

    const newTask: Task = {
      id: tasks.length + 1,
      description: tasksText,
    }
    setTasks([...tasks, newTask])
    setTaskCount((prevCount) => prevCount + 1)
    setTasksText('')
  }

  const lowerSearch = tasksText.toLowerCase()

  const tasksFilter = tasks.filter((task) => {
    return task.description.toLowerCase().includes(lowerSearch)
  })

  const handleLogout = () => {
    window.localStorage.removeItem('userToken')
    navigate('/login')
  }

  return (
    <>
      <div className={styles.container}>
        <Header onLogout={handleLogout} />
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
            <List tasks={tasks} />
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
