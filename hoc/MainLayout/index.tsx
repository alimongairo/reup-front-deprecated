import { ReactNode } from 'react';

import Header from '@/hoc/MainLayout/Header';
import Footer from '@/hoc/MainLayout/Footer';

import cx from './index.module.scss';

interface IProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.header}>
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
