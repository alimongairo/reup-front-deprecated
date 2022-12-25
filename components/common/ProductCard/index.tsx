import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';

import { TProductItem } from '@/store/productList/type';
import { EPagesRoutes } from '@/constants/router';

import Like from '@/static/icons/like.svg';
import fillLike from '@/static/icons/fillLike.svg';

import cx from './index.module.scss';

// TODO replace imgSource to url

type IProps = {
  onLike: (id: number) => void;
  onAddToBasket: (id: number) => void;
} & TProductItem;

const ProductCard = ({
  id,
  title,
  like,
  imgSource,
  description,
  price,
  onLike,
  onAddToBasket,
}: IProps) => {
  const router = useRouter();

  const goToProductDetail = () => {
    router.push(`${EPagesRoutes.ProductDetail}/${id}`);
  };

  return (
    <div className={cx.wrapper}>
      <span
        className={classNames(cx.likeIcon, 'iconBnt')}
        onClick={() => onLike(id)}
      >
        <Image src={like ? fillLike : Like} alt="like" width={20} />
      </span>
      <Image
        src={imgSource}
        alt={title}
        className={cx.productImg}
        onClick={goToProductDetail}
      />
      <div className={cx.text}>
        <Heading size="medium">{title}</Heading>
        <Text>{description}</Text>
      </div>
      <div className={cx.actions}>
        <button onClick={() => onAddToBasket(id)}>В корзину</button>
        <Heading size="small">{price} ₽</Heading>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
