import { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from 'store';
import { Provider } from 'react-redux';

import './app.css';

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
