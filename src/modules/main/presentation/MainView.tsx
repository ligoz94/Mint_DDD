import type { NextPage } from 'next'
import DefaultTemplate from '../../../components/template/Default'
import { MintContextProvider } from '../../mint/context/mintContext'
import MintView from '../../mint/presentation/MintView'

const MainView: NextPage = () => {
  return (
    <>
      <div className="background">
        <div className="overlay">
          <DefaultTemplate>
            <MintContextProvider>
              <MintView />
            </MintContextProvider>
          </DefaultTemplate>
        </div>
      </div>
    </>
  )
}

export default MainView
