import React, { useContext, useState } from 'react'
import { MintStoreDispatch, MintStoreState } from '../domain/MintStore'

// create contexts
const MintContextState: React.Context<MintStoreState> =
  React.createContext<MintStoreState>(null!)
const MintContextDispatch: React.Context<MintStoreDispatch> =
  React.createContext<MintStoreDispatch>(null!)

const useMintContextState = () => {
  const context = useContext(MintContextState) as MintStoreState

  if (context === undefined) {
    throw new Error('useMintContextState was used outside of its Provider')
  }

  return context
}

const useMintContextDisaptch = () => {
  const context = useContext(MintContextDispatch) as MintStoreDispatch

  if (context === undefined) {
    throw new Error('useUserContextDisaptch was used outside of its Provider')
  }

  return context
}

interface Props {
  children: React.ReactElement
}

const MintContextProvider = ({ children }: Props) => {
  const [amount, setAmount] = useState<number | null>(null)

  const state: MintStoreState = {
    amount,
  }
  const dispatch: MintStoreDispatch = {
    setAmount,
  }
  return (
    <MintContextState.Provider value={state}>
      <MintContextDispatch.Provider value={dispatch}>
        {children}
      </MintContextDispatch.Provider>
    </MintContextState.Provider>
  )
}

export { MintContextProvider, useMintContextState, useMintContextDisaptch }
