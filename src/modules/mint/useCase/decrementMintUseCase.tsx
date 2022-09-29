const decrementMintUseCase = (counter: number) => {
  if (counter <= 1) return counter
  return counter - 1
}

export { decrementMintUseCase }
