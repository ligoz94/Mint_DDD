import ButtonComp from '../../../components/atoms/button/Button'
import { useAuthContextState } from '../../auth/context/authContext'
import useMintViewModel from '../application/MintViewModel'

export default function MintView() {
  const { isConnected } = useAuthContextState()
  const {
    mintAmount,
    handleDecrementMint,
    handleIncrementMint,
    handleMint,
    onChangeInputMint,
  } = useMintViewModel()

  return (
    <div className="mint">
      <h1 className="mint__title">Lolaboss</h1>
      <p className="mint__description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      {isConnected ? (
        <div className="counter">
          <div className="counter__handlers">
            <ButtonComp
              borderRadius="10px 0 0 10px"
              size="lg"
              text="-"
              colorScheme="pink"
              onClick={handleDecrementMint}
            ></ButtonComp>
            <input
              className="counter__handlers__input"
              type="number"
              value={mintAmount}
              onChange={onChangeInputMint}
            />
            <ButtonComp
              size="lg"
              borderRadius="0 10px 10px 0"
              text="+"
              colorScheme="pink"
              onClick={handleIncrementMint}
            ></ButtonComp>
          </div>
          <div className="counter__mint">
            <ButtonComp
              size="lg"
              text="MINT"
              colorScheme="pink"
              onClick={handleMint}
            />
          </div>
        </div>
      ) : (
        <p className="counter__alert">wallet doesn&apos;t connect yet</p>
      )}
    </div>
  )
}
