import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { TProductItem } from '@/store/productList/type';
import { EPagesRoutes } from '@/constants/router';

import Like from '@/static/icons/like.svg';

import cx from './index.module.scss';

// TODO replace imgSource to url

type IProps = {
  onLike: (id: number) => void;
  onAddToBasket: (id: number) => void;
} & TProductItem;

const ProductCard = ({
  id,
  title,
  imgSource,
  description,
  price,
  onLike,
  onAddToBasket,
}: IProps) => {
  return (
    <Link href={`${EPagesRoutes.ProductDetail}/${id}`}>
      <div className={cx.wrapper}>
        <button
          className={classNames(cx.likeIcon, 'iconBnt')}
          onClick={() => onLike(id)}
        >
          <Image src={Like} alt="like" width={20} />
        </button>
        <Image src={imgSource} alt={title} className={cx.productImg} />
        <div className={cx.text}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={cx.actions}>
          <button className="greyBtn" onClick={() => onAddToBasket(id)}>
            В корзину
          </button>
          <h2>{price} ₽</h2>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(ProductCard);
