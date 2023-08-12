import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import PreviewProductModal from '@/components/common/ProductCard/PreviewProductModal';

import { TProductItem } from '@/store/productList/type';
import { EPagesRoutes } from '@/constants/router';

import LikeSvg from '@/static/icons/LikeSvg';

import cx from './index.module.scss';

// TODO replace imgSource to url

type IProps = {
  onLike?: (pid: number) => void;
  onAddToBasket?: (id: number) => void;
} & TProductItem;

const ProductCard = ({
  vendor_id,
  name,
  like,
  main_image,
  brand,
  price,
  sale,
  description,
  onLike,
  onAddToBasket,
}: IProps) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const router = useRouter();
  const [isLike, setIsLike] = useState(like);

  const goToProductDetail = () => {
    router.push(`${EPagesRoutes.ProductDetail}/${vendor_id}`);
  };

  const onCloseModal = () => {
    setVisibleModal(false);
  };

  const onChangeLike = () => {
    onLike && onLike(vendor_id);
    setIsLike((prev) => !prev);
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
      <PreviewProductModal
        visible={visibleModal}
        onClose={onCloseModal}
        price={price}
        sale={sale}
        name={name}
        main_image={main_image}
        onChangeLike={onChangeLike}
        isLike={isLike}
        description={description}
      />
      <span
        className={classNames(cx.likeIcon, 'iconBnt')}
        onClick={onChangeLike}
      >
        <LikeSvg isActive={isLike} />
      </span>
      <Image
        src={main_image}
        width={317}
        height={380}
        alt={name}
        className={cx.productImg}
        onClick={goToProductDetail}
      />
      <div className={cx.text}>
        <Heading tag="h3">{name}</Heading>
        <Text size="thin">{brand}</Text>
      </div>
      <div className={cx.actions}>
        <Button
          className={cx.toBasket}
          onClick={() => onAddToBasket && onAddToBasket(vendor_id)}
        >
          в корзину
        </Button>
        <Heading tag="h3">{price - sale} ₽</Heading>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
