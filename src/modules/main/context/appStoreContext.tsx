import React, { useContext, useMemo, useState } from 'react'
import { MainStoreDispatch, MainStoreState } from '../domain/MainStore'

const MainContextState = React.createContext<MainStoreState>(null!)
const MainContextDispatch = React.createContext<MainStoreDispatch>(null!)

const useMainContextState = () => {
  const context = useContext(MainContextState)

  if (context === undefined) {
    throw new Error('useMainContextState was used outside of its Provider')
  }

  return context
}

const useMainContextDisaptch = () => {
  const context = useContext(MainContextDispatch)

  if (context === undefined) {
    throw new Error('useMainContextDisaptch was used outside of its Provider')
  }

  return context
}

interface Props {
  children: React.ReactElement
}

const MainContextProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const state = useMemo(() => ({ isLoading }), [isLoading])
  return (
    <MainContextState.Provider value={state}>
      <MainContextDispatch.Provider value={{ setIsLoading }}>
        {children}
      </MainContextDispatch.Provider>
    </MainContextState.Provider>
  )
}

export { MainContextProvider, useMainContextState, useMainContextDisaptch }
