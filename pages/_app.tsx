/*
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
*/
import React from 'react';
import Login from './user/sign-in';

const App: React.FC = () => {
  return (
    <Login />
  );
}

export default App;