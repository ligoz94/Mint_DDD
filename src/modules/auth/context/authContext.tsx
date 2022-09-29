import React, { useCallback, useContext, useMemo, useState } from 'react'
import {
  AuthEntityDispatch,
  AuthEntityState,
} from '../domain/authContextEntity'

const AuthContextState = React.createContext<AuthEntityState>(null!)
const AuthContextDispatch = React.createContext<AuthEntityDispatch>(null!)

const useAuthContextState = () => {
  const context = useContext(AuthContextState)

  if (context === undefined) {
    throw new Error('useAuthContextState was used outside of its Provider')
  }

  return context
}

const useAuthContextDisaptch = () => {
  const context = useContext(AuthContextDispatch)

  if (context === undefined) {
    throw new Error('useAuthContextDisaptch was used outside of its Provider')
  }

  return context
}

interface Props {
  children: React.ReactElement
}

const AuthContextProvider = ({ children }: Props) => {
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [currentAccount, setCurrentAccount] = useState<string>('')

  let ethereum: any = null

  if (typeof window !== 'undefined') {
    ethereum = window.ethereum
  }

  const connectWallet = useCallback(async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })

      console.log('accounts[0]', accounts[0])
      setCurrentAccount(accounts[0])
      setIsConnected(true)
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }, [])

  const checkIfWalletIsConnect = useCallback(async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
      } else {
        console.log('No accounts found')
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  const state = useMemo(
    () => ({ currentAccount, isConnected }),
    [currentAccount, isConnected]
  )

  return (
    <AuthContextState.Provider value={state}>
      <AuthContextDispatch.Provider
        value={{ connectWallet, checkIfWalletIsConnect }}
      >
        {children}
      </AuthContextDispatch.Provider>
    </AuthContextState.Provider>
  )
}

export { AuthContextProvider, useAuthContextState, useAuthContextDisaptch }
