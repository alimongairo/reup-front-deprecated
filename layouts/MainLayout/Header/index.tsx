import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import BasketLinkButton from '@/components/Basket/BasketLinkButton';

import DropDownProfile from '@/layouts/MainLayout/Header/DropDownProfile';
import { EPagesRoutes } from '@/constants/router';
import Search from '@/layouts/MainLayout/Header/Search';
import Navigation from '@/layouts/MainLayout/Header/Navigation';

import logo from '@/static/icons/Logo.svg';

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
          <DropDownProfile />
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
