import { Button } from 'antd';
import Link from 'next/link';
import { LoginOutlined } from '@ant-design/icons';

import Search from '@/components/Main/Header/Search';
import BasketLinkButton from '@/components/Basket/BasketLinkButton';
import Navigation from '@/components/Main/Header/Navigation';

import cx from './index.module.scss';
import { EPagesRoutes } from '@/constants/router';

const MainPageHeader = () => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.firstRow}>
        <h1>Logo</h1>
        <Search />
        <div>
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
