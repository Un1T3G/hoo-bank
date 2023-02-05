import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

interface IContext {
  isShow: boolean
  setIsShow: Dispatch<SetStateAction<boolean>>
}

const Context = createContext<IContext>({} as IContext)

interface IProps {
  children: JSX.Element | JSX.Element[] | undefined
}

const Provider = ({ children }: IProps) => {
  const [isShow, setIsShow] = useState(false)

  const value = {
    isShow,
    setIsShow,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const HeaderNavigationProvider = Provider
export const useHeaderNavigation = () => useContext(Context)
