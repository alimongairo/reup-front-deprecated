import React, { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import PreviewProductModal from '@/components/common/ProductCard/PreviewProductModal';

import { TProductItem } from '@/store/productList/type';
import { EPagesRoutes } from '@/constants/router';

import Like from '@/static/icons/like.svg';

import cx from './index.module.scss';

// TODO replace imgSource to url

type IProps = {
  onLike?: (id: number) => void;
  onAddToBasket?: (id: number) => void;
} & TProductItem;

const ProductCard = ({
  id,
  title,
  like,
  imgSource,
  brand,
  price,
  onLike,
  onAddToBasket,
}: IProps) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const router = useRouter();

  const goToProductDetail = () => {
    router.push(`${EPagesRoutes.ProductDetail}/${id}`);
  };

  const onCloseModal = () => {
    setVisibleModal(false);
  };

  return (
    <div className={cx.wrapper}>
      <Button
        size="small"
        className={cx.previewBtn}
        onClick={() => setVisibleModal(true)}
      >
        <Text size="thin">быстрый просмотр</Text>
      </Button>
      <PreviewProductModal visible={visibleModal} onClose={onCloseModal} />
      <span
        className={classNames(cx.likeIcon, 'iconBnt')}
        onClick={() => onLike && onLike(id)}
      >
        <Image src={Like} alt="like" width={20} />
      </span>
      <Image
        src={imgSource}
        alt={title}
        className={cx.productImg}
        onClick={goToProductDetail}
      />
      <div className={cx.text}>
        <Heading tag="h3">{title}</Heading>
        <Text size="thin">{brand}</Text>
      </div>
      <div className={cx.actions}>
        <Button onClick={() => onAddToBasket && onAddToBasket(id)}>
          в корзину
        </Button>
        <Heading tag="h3">{price} ₽</Heading>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
