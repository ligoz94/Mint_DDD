interface MainStoreState {
  isLoading: boolean
}
interface MainStoreDispatch {
  setIsLoading(isLoading: boolean): void
}

export type { MainStoreState, MainStoreDispatch }
