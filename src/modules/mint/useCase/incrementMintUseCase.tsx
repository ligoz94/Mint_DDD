const incrementMintUseCase = (counter: number) => {
  if (counter >= 3) return counter
  return counter + 1
}

export { incrementMintUseCase }
