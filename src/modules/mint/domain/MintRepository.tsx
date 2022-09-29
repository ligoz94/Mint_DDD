interface MintRepository {
  handleMint(counter: number): void
  handleDecrementMint(counter: number): number
  handleIncrementMint(counter: number): number
}

export type { MintRepository }
