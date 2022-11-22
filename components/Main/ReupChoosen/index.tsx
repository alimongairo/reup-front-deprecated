import cx from './index.module.scss';
import ProductCard from '@/components/common/ProductCard';

import img from '@/static/img/product1.png';

const productCardProps = {
  id: 1,
  title: 'Название продукта',
  imgSource: img,
  description: 'Описание проекта',
  price: 123,
  onLike: (id: number) => console.log(id),
  onAddToBasket: (id: number) => console.log(id),
};

const ReupChoosen = () => {
  return (
    <div className={cx.container}>
      <div className={cx.brand1}>brand1</div>
      <div className={cx.brand2}>brand2</div>
      <div className={cx.sale}>sale</div>
      <div className={cx.product}>
        <ProductCard {...productCardProps} />
      </div>
      <div className={cx.product1}>
        <ProductCard {...productCardProps} />
      </div>
      <div className={cx.product2}>
        <ProductCard {...productCardProps} />
      </div>
      <div className={cx.product3}>
        <ProductCard {...productCardProps} />
      </div>
    </div>
  );
};

export default ReupChoosen;
