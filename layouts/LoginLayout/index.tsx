import { FC, ReactNode } from 'react';

import Header from '@/layouts/MainLayout/Header';

import cx from './index.module.scss';

interface IProps {
  children: ReactNode;
}

const LoginLayout: FC<IProps> = ({ children }) => {
  return (
    <div className={cx.wrapper}>
      <Header />
      {children}
    </div>
  );
};

export default LoginLayout;
