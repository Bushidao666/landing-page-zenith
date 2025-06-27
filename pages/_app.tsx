import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { initializeFixel } from '@/lib/facebook-conversions-api';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initializeFixel();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp; 