import React, { useState } from 'react'

export interface IAppContext {
  completedTasksCount: number
  setCompletedTasksCount: (data: number) => void
}

type Props = {
  children?: React.ReactNode
}

export const AppContext = React.createContext<IAppContext>({} as IAppContext)

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [completedTasksCount, setCompletedTasksCount] = useState(0)

  return (
    <AppContext.Provider
      value={{ completedTasksCount, setCompletedTasksCount }}
    >
      {children}
    </AppContext.Provider>
  )
}
