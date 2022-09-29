import { useState } from 'react'
import { useMintContextDisaptch } from '../context/mintContext'
import { decrementMintUseCase } from '../useCase/decrementMintUseCase'
import { handleMintUseCase } from '../useCase/handleMintUseCase'
import { incrementMintUseCase } from '../useCase/incrementMintUseCase'

interface MintViewModelProps {
  mintAmount: number
  handleMint(): void
  handleDecrementMint(): void
  handleIncrementMint(): void
  onChangeInputMint(event: React.FormEvent<HTMLInputElement>): void
}

export default function useMintViewModel(): MintViewModelProps {
  const { setAmount } = useMintContextDisaptch()
  const [mintAmount, setMintAmount] = useState<number>(1)

  const handleIncrementMint = () => {
    setMintAmount(incrementMintUseCase(mintAmount))
    setAmount(4)
  }
  const handleDecrementMint = () => {
    setMintAmount(decrementMintUseCase(mintAmount))
    setAmount(4)
  }
  const handleMint = () => {
    handleMintUseCase(mintAmount)
  }

  const onChangeInputMint = (event: React.FormEvent<HTMLInputElement>) => {
    const value: number = parseInt(event.currentTarget.value)
    setMintAmount(value)
    setAmount(value)
  }

  return {
    mintAmount,
    handleIncrementMint,
    handleDecrementMint,
    handleMint,
    onChangeInputMint,
  }
}
