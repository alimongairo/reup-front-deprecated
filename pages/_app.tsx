import { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { wrapper } from 'store';
import { Provider } from 'react-redux';

import ErrorBoundary from '@/components/ErrorBoundary';

import './app.css';
import '@/styles/global.css';

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <ErrorBoundary>
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            crossOrigin="true"
            rel="preconnect"
            href="https://fonts.gstatic.com"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    </ErrorBoundary>
  );
};

export default App;
