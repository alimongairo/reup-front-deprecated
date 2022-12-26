import { Button } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { LoginOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import { EPagesRoutes } from '@/constants/router';
import Search from '@/hoc/MainLayout/Header/Search';
import BasketLinkButton from '@/components/Basket/BasketLinkButton';

import Like from '@/static/icons/like.svg';

import Navigation from '@/hoc/MainLayout/Header/Navigation';
import logo from '@/static/icons/Logo.svg';
import profile from '@/static/icons/profile.svg';

import cx from './index.module.scss';

const MainPageHeader = () => {
  const router = useRouter();

  const onClickLogo = () => {
    if (router.asPath !== EPagesRoutes.Main) {
      router.push(EPagesRoutes.Main);
    }
  };

  return (
    <div className={cx.wrapper}>
      <div className={cx.firstRow}>
        <Image
          className={classNames(
            cx.logo,
            router.asPath !== EPagesRoutes.Main && cx.clickable,
          )}
          src={logo}
          alt="Logo"
          onClick={onClickLogo}
        />
        <Search />
        <div className={cx.buttons}>

          <Link href={EPagesRoutes.Profile}>
            <Image src={profile} alt={'Profile'} />
          </Link>
          <BasketLinkButton />
          {/*<Link href={EPagesRoutes.Auth}>*/}
          {/*</Link>*/}
        </div>
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default MainPageHeader;
