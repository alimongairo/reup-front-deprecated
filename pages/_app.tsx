import { FC } from 'react';
import { AppProps } from 'next/app';
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
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
