import Link from 'next/link';
import Image from 'next/image';

import { TProductItem } from '@/store/productList/type';
import { TBasketItem } from '@/store/basket/type';
import { EPagesRoutes } from '@/constants/router';

import cx from './index.module.scss';

interface IProps {
  products: TProductItem[];
  basket: TBasketItem[];
}

const ProductImages = ({ products, basket }: IProps) => {
  return (
    <div className={cx.wrapper}>
      <Link href={`${EPagesRoutes.Basket}/`} rel={EPagesRoutes.Basket}>
        <Image
          src={products[basket[0].productId].imgSource}
          alt="product image"
        />
      </Link>
      {basket.length > 1 && (
        <Link href={`${EPagesRoutes.Basket}/`} rel={EPagesRoutes.Basket}>
          <div className={cx.ohterImages}>
            <div className={basket.length > 2 ? cx.blur : undefined}>
              <Image
                src={products[basket[1].productId].imgSource}
                alt="product image"
              />
            </div>
            {basket.length > 2 && (
              <div className={cx.amount}>+{basket.length - 1}</div>
            )}
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProductImages;
