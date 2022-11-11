import { ethers, BigNumber } from 'ethers'
import lolaBoss from '../../../Lolaboss.json'

const lolaBossAddress = '0x426C7207c229b9825A761E930b9E7EB5A003E1a3'

const handleMintUseCase = async (counter: number) => {
  if (window.ethereum && counter >= 1) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const singer = provider.getSigner()
    const contract = new ethers.Contract(lolaBossAddress, lolaBoss.abi, singer)
    try {
      const response = await contract.mint(BigNumber.from(counter), {
        value: ethers.utils.parseEther((0.02 * counter).toString()),
      })
      console.log('response:', response)
      response.wait().then(function (receipt: any) {
        console.log('receipt:', receipt)
      })
    } catch (error) {
      console.log('error:', error)
    }
  }
}

export { handleMintUseCase }
