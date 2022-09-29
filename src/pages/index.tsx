import type { NextPage } from 'next'
import { AuthContextProvider } from '../modules/auth/context/authContext'
import { MainContextProvider } from '../modules/main/context/appStoreContext'
import MainView from '../modules/main/presentation/MainView'
import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Prompt', sans-serif`,
    body: `'Prompt', sans-serif`,
  },
})

const Home: NextPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <MainContextProvider>
          <MainView />
        </MainContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  )
}

export default Home
