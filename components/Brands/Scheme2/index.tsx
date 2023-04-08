import Image from 'next/image';
import brandBanner from '@/static/img/brandBanner_remove.png';
import brandLogo from '@/static/img/brandLogo.png';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import sweetshot from '@/static/img/sweetshot_remove.png';
import MoreButton from '@/components/common/MoreButton';
import brandPromo from '@/static/img/brandPromo_remove.png';

import cx from './index.module.scss';
import Slider from '@/components/Brands/Scheme2/Slider';
import ProductsList from '@/components/Main/ProductList';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { getProductListDataSource } from '@/store/productList/selectors';
import { useEffect } from 'react';
import { getProductListAction } from '@/store/productList/thunk';

const Scheme2 = () => {
  const dispatch = useAppDispatch();

  const newProducts = useAppSelector(getProductListDataSource);

  useEffect(() => {
    dispatch(getProductListAction());
  }, []);

  return (
    <div>
      <Image className={cx.bannerImg} src={brandBanner} alt="banner" />
      <div className={cx.logo}>
        <Image src={brandLogo} alt="logo" />
      </div>
      <div className={cx.promoCards}>
        <div className={cx.promoProduct}>
          <Heading tag="h2">свитшотик</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor inci
          </Text>
          <Image src={sweetshot} alt="product" />
          <MoreButton className={cx.moreBtn} />
        </div>
        <div className={cx.promoBanner}>
          <Image src={brandPromo} alt={'brandPromo'} />
          <div className={cx.bannerFooter}>
            <Heading tag="h2">джинсеки</Heading>
            <MoreButton />
          </div>
        </div>
        <div className={cx.about}>
          <Heading tag="h2">о нас</Heading>
          <Text>
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.{' '}
          </Text>
        </div>
      </div>
      <Heading>заголовок</Heading>
      <Slider />
      <div className={cx.products}>
        <Heading>заголовок</Heading>
        <ProductsList productList={newProducts} />
      </div>
    </div>
  );
};

export default Scheme2;
