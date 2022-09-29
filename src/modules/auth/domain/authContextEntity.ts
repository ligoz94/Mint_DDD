interface AuthEntityState {
  isConnected: boolean
  currentAccount: string
}
interface AuthEntityDispatch {
  checkIfWalletIsConnect: () => void
  connectWallet: () => void
}

export type { AuthEntityState, AuthEntityDispatch }
