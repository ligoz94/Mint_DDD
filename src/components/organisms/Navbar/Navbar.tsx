import {
  useAuthContextDisaptch,
  useAuthContextState,
} from '../../../modules/auth/context/authContext'
import { shortAddress } from '../../../utils'
import ButtonComp from '../../atoms/button/Button'
import ButtonGroupComp from '../../molecules/ButtonGroups/ButtonGroups'

const NavBar: React.FC = () => {
  const { connectWallet, checkIfWalletIsConnect } = useAuthContextDisaptch()
  const { currentAccount } = useAuthContextState()

  return (
    <div className="navbar">
      <div className="navbar__right">
        <div className="navbar__right__buttons">
          <ButtonGroupComp>
            <>
              <ButtonComp
                color="#f8f8f8"
                size="lg"
                variant="transparent"
                text="Mint"
                onClick={() => null}
              />
              <ButtonComp
                color="#f8f8f8"
                size="lg"
                variant="transparent"
                text="About"
                onClick={() => null}
              />
              <ButtonComp
                color="#f8f8f8"
                size="lg"
                variant="transparent"
                text="Team"
                onClick={checkIfWalletIsConnect}
              />
              <ButtonComp
                color="#f8f8f8"
                size="lg"
                variant="transparent"
                text={
                  currentAccount ? shortAddress(currentAccount) : 'Connetti'
                }
                onClick={connectWallet}
              />
            </>
          </ButtonGroupComp>
        </div>
      </div>
    </div>
  )
}

export default NavBar
