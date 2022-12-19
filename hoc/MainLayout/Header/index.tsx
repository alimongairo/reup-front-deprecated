import { Button } from 'antd';
import Link from 'next/link';
import { LoginOutlined } from '@ant-design/icons';

import Search from '@/hoc/MainLayout/Header/Search';
import BasketLinkButton from '@/components/Basket/BasketLinkButton';
import Navigation from '@/hoc/MainLayout/Header/Navigation';

import cx from './index.module.scss';
import { EPagesRoutes } from '@/constants/router';
import logo from '@/static/icons/Logo.svg';
import Image from 'next/image';

const MainPageHeader = () => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.firstRow}>
        <Image className={cx.logo} src={logo} alt="Logo" />
        <Search />
        <div className={cx.buttons}>
          <BasketLinkButton />
          <Link href={EPagesRoutes.Auth}>
            <Button type="dashed" icon={<LoginOutlined />} />
          </Link>
        </div>
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default MainPageHeader;
