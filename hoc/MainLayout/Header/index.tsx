import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import BasketLinkButton from '@/components/Basket/BasketLinkButton';
import { EPagesRoutes } from '@/constants/router';
import Navigation from '@/hoc/MainLayout/Header/Navigation';
import logo from '@/static/icons/Logo.svg';
import profile from '@/static/icons/profile.svg';

import cx from './index.module.scss';
import Search from '@/components/Search';

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
