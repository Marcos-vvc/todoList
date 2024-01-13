import { Trash } from '@phosphor-icons/react'
import styles from './List.module.css'
import { useState, useContext, ChangeEvent } from 'react'
import { AppContext } from '../../context/AppContext'
import Check from '../../assets/check.svg'
import Checked from '../../assets/check2.svg'

type Props = {
  task: string
  onDeleteTask: (taskAdd: string) => void
}

export function List({ task, onDeleteTask }: Props) {
  const [isChecked, setIsChecked] = useState(false)

  const { completedTasksCount, setCompletedTasksCount } = useContext(AppContext)

  function handleTaskCompletion(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.checked
    setIsChecked(newValue)

    if (newValue) {
      setCompletedTasksCount(completedTasksCount + 1)
    } else {
      setCompletedTasksCount(completedTasksCount - 1)
    }
  }

  function handleDeleteTask() {
    onDeleteTask(task)
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.customCheckbox}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleTaskCompletion}
        />
        {isChecked ? (
          <img src={Checked} className={styles.checkedImage} alt="" />
        ) : (
          <img src={Check} alt="" />
        )}
      </label>
      <p className={`${styles.label} ${isChecked ? styles.checkedText : ''} `}>
        {' '}
        {task}{' '}
      </p>
      <Trash
        className={styles.trashButton}
        size={24}
        onClick={handleDeleteTask}
      />
    </div>
  )
}
