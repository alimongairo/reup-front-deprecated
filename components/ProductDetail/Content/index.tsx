import Slider from '@/components/ProductDetail/Content/Slider';
import Params from '@/components/ProductDetail/Content/Params';
import Header from '@/components/ProductDetail/Content/Header';
import Reviews from '@/components/ProductDetail/Content/Reviews';

import cx from './index.module.scss';

const ProductDetailContent = () => {
  return (
    <div className={cx.wrapper}>
      <Header />
      <div className={cx.content}>
        <Slider />
        <Params />
      </div>
      <div>
        <Reviews />
      </div>
    </div>
  );
};

export default ProductDetailContent;
