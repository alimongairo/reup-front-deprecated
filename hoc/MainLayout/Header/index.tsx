import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import BasketLinkButton from '@/components/Basket/BasketLinkButton';
import like from '@/static/icons/like.svg'

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
        <div className={classNames({
        [cx.navBarHiden]:hiden},
          cx.header)}>
          <Image
           className={classNames(
             cx.logo,
              router.asPath !== EPagesRoutes.Main && cx.clickable,
            )}
            src={logo}
            alt="Logo"
            onClick={onClickLogo}
          />
            <div className={cx.navBar}>
              <Navigation />
              <div className={cx.search}>
                <Search />
                </div>
              </div>
          <div className={cx.buttons}>
          <Image src={like} alt='likehLogo'></Image>
          <div className={cx.profile}>
            <DropDownProfile />
          </div>
          <BasketLinkButton />
          {/*<Link href={EPagesRoutes.Auth}>*/}
          {/*</Link>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageHeader;
