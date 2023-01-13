import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { EPagesRoutes } from '@/constants/router';
import { TProductItem } from '@/store/productList/type';

import Like from '@/static/icons/like.svg';

import cx from './index.module.scss';
import Modal from './Modal';

// TODO replace imgSource to url

type IProps = {
  onLike: (id: number) => void;
  onAddToBasket: (id: number) => void;
  productList: TProductItem[];
} & TProductItem;

const ProductCard = ({
  id,
  title,
  imgSource,
  description,
  price,
  onLike,
  onAddToBasket,
  productList,
}: IProps) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const modalActive = () => {
    setModal(true);
  };

  useEffect(() => {
    modal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
  }, [modal]);

  const goToProductDetail = () => {
    router.push(`${EPagesRoutes.ProductDetail}/${id}`);
  };

  return (
    <div className={cx.wrapper}>
      <button onClick={() => modalActive()} className={cx.modalBtn}>
        быстрый просмотр
      </button>

      {modal ? (
        <>
          <Modal
            productList={productList}
            id={id}
            imgSource={imgSource}
            onLike={onLike}
            title={title}
            price={price}
            description={description}
            onAddToBasket={onAddToBasket}
            setModal={setModal}
            goToProductDetail={goToProductDetail}
          />
        </>
      ) : (
        <>
          <span
            className={classNames(cx.likeIcon, 'iconBnt')}
            onClick={() => onLike(id)}
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
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className={cx.actions}>
            <button onClick={() => onAddToBasket(id)}>В корзину</button>
            <h2>{price} ₽</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(ProductCard);
