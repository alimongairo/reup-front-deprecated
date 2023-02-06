import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import BasketLinkButton from '@/components/Basket/BasketLinkButton';

import DropDownProfile from '@/hoc/MainLayout/Header/DropDownProfile';
import { EPagesRoutes } from '@/constants/router';
import Search from '@/hoc/MainLayout/Header/Search';
import Navigation from '@/hoc/MainLayout/Header/Navigation';

import logo from '@/static/icons/Logo.svg';

import cx from './index.module.scss';
import { useEffect, useState } from 'react';

const MainPageHeader = () => {
  const router = useRouter();
  const [hiden, setHiden] = useState(false)
  const onClickLogo = () => {
    if (router.asPath !== EPagesRoutes.Main) {
      router.push(EPagesRoutes.Main);
    }
  };
  useEffect(()=>{
    let prevScrollpos = 0;
    document.addEventListener('scroll',()=>{
      let currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos){
        setHiden(false)
      }
      else if(prevScrollpos < currentScrollPos){
        setHiden(true)
      }
      prevScrollpos = currentScrollPos
    })
  },[])

  return (
    <div className={cx.wrapper}>
      <div className={cx.firstRow}>
        <div className={cx.header}>
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
      </div>
      <div className={classNames({
        [cx.navBarHiden]:hiden
      },cx.navBar)}>
        <Navigation />
      </div>
    </div>
  );
};

export default MainPageHeader;
