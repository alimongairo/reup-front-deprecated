import { useEffect } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import BrandProductList from '@/components/Brands/BrandProductList';
import Slider from '@/components/Brands/Scheme2/Slider';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import MoreButton from '@/components/common/MoreButton';
import ProductsList from '@/components/Main/ProductList';

import brandBanner from '@/static/img/brandBanner_remove.png';
import brandLogo from '@/static/img/brandLogo.png';
import sweetshot from '@/static/img/sweetshot_remove.png';
import brandPromo from '@/static/img/brandPromo_remove.png';

import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { getProductListDataSource } from '@/store/productList/selectors';
import { getProductListAction } from '@/store/productList/thunk';

import cx from './index.module.scss';

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
      <div className={classNames(cx.heading, cx.headingSlider)}>
        <Heading>заголовок</Heading>
      </div>
      <Slider />
      <div className={cx.products}>
        <div className={cx.heading}>
          <Heading>заголовок</Heading>
        </div>
        <ProductsList productList={newProducts} />
      </div>
      <BrandProductList />
    </div>
  );
};

export default Scheme2;
