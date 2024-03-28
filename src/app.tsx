import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import 'taro-ui/dist/style/index.scss';
import './app.scss';

type AppProps = {
  children: ReactNode;
};

const App: FC<AppProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default App;
