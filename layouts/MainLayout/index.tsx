import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import Header from '@/layouts/MainLayout/Header';
import Footer from '@/layouts/MainLayout/Footer';

import { EPagesRoutes } from '@/constants/router';

import cx from './index.module.scss';

interface IProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  const router = useRouter();

  return (
    <div
      className={classNames(cx.wrapper, {
        [cx.margin]: router.asPath !== EPagesRoutes.Main,
      })}
    >
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
