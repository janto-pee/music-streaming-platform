import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../Components/Layout'
import { extendTheme } from '@chakra-ui/react'
import Head from 'next/head';

const theme = extendTheme({
  fonts: {
    body: 'Inter',
  },
})
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Fruktur&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
        <ChakraProvider theme={theme} >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
    </>
  )
}

export default MyApp
