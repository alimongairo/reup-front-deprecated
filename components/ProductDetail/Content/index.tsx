import Slider from '@/components/ProductDetail/Content/Slider';
import Params from '@/components/ProductDetail/Content/Params';

import cx from './index.module.scss';

const ProductDetailContent = () => {
  return (
    <div className={cx.wrapper}>
      <Slider />
      <Params />
    </div>
  );
};

export default ProductDetailContent;
