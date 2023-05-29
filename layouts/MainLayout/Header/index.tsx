import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

import { useWindowSize } from '@/hooks/useWindow';
import Heading from '@/components/common/Heading';

import DropDownProfile from '@/layouts/MainLayout/Header/DropDownProfile';
import { EPagesRoutes } from '@/constants/router';
import Search from '@/layouts/MainLayout/Header/Search';
import Navigation from '@/layouts/MainLayout/Header/Navigation';

import like from '@/static/icons/like.svg';
import basket from '@/static/icons/basket.svg';

import cx from './index.module.scss';

const MainPageHeader = () => {
  const windowSize = useWindowSize();
  const router = useRouter();
  const [hide, setHide] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const goToBasket = () => {
    router.push(EPagesRoutes.Basket);
  };

  const goToLiked = () => {
    router.push(EPagesRoutes.Liked);
  };

  const onClickLogo = () => {
    if (router.asPath !== EPagesRoutes.Main) {
      router.push(EPagesRoutes.Main);
    }
  };

  useEffect(() => {
    let prevScrollpos = 0;
    document.addEventListener('scroll', () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setHide(false);
      } else if (prevScrollpos < currentScrollPos) {
        setHide(true);
      }
      prevScrollpos = currentScrollPos;
    });
  }, []);

  return (
    <div
      className={classNames(cx.wrapper, {
        [cx.notMain]: router.asPath !== EPagesRoutes.Main,
        [cx.hide]: hide,
      })}
    >
      {windowSize?.width <= 586 ? (
        <div className={cx.head_mobile}>
          <Heading onClick={onClickLogo} className={cx.logo}>
            REUP
          </Heading>
          <Search visible={searchVisible} setVisible={setSearchVisible} />
        </div>
      ) : (
        <>
          <div className={cx.leftSide}>
            <Heading onClick={onClickLogo} className={cx.logo}>
              REUP
            </Heading>
            <Navigation />
            <Search visible={searchVisible} setVisible={setSearchVisible} />
          </div>
          <div className={cx.actions}>
            <Image src={like} alt="like" width={18} onClick={goToLiked} />
            <DropDownProfile />
            <Image src={basket} alt="basket" width={18} onClick={goToBasket} />
          </div>
        </>
      )}
    </div>
  );
};

export default MainPageHeader;
