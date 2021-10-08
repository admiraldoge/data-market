import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { StyledEngineProvider } from '@mui/material/styles';
import Navbar from '../components/navbar/navbar';
import Head from '../components/layouts/Head'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Component {...pageProps} />
    </>
  )
}
export default MyApp