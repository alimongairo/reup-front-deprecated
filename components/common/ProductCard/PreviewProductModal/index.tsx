import Image from 'next/image';
import classNames from 'classnames';

import Modal from '@/components/common/Modal';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import Collapse from '@/components/common/Collapse';
import ProductInfo from '@/components/common/ProductCard/PreviewProductModal/ProductInfo';
import Slider from '@/components/common/ProductCard/PreviewProductModal/Slider';

import { TProductItem } from '@/store/productList/type';
import cx from './index.module.scss';
import ledy from 'static/img/ledy.png';
import LikeSvg from '@/static/icons/LikeSvg';

type IProps = {
  visible: boolean;
  onClose: () => void;
} & TProductItem;

const PreviewProductModal = ({
  visible,
  onClose,
  price,
  sale,
  name,
  main_image,
  onChangeLike,
  isLike,
  description,
}: any) => {
  const slides = [
    {
      id: 0,
      img: main_image,
    },
    // TODO: отправляем запрос за всеми картинками и дописываем в массив
  ];

  return (
    <Modal visible={visible} onClose={onClose}>
      <div className={cx.contentWrapper}>
        <Slider slides={slides} />
        <div className={cx.info}>
          <div className={cx.heading}>
            <Heading tag="h2">{name}</Heading>
            <span
              className={classNames(cx.likeIcon, 'iconBnt')}
              onClick={onChangeLike}
            >
              <LikeSvg isActive={isLike} />
            </span>
          </div>
          <Text size="big" className={cx.space}>
            ___
          </Text>
          <Text size="thin" className={classNames(cx.code, cx.space)}>
            ___
          </Text>
          <div className={classNames(cx.price, cx.space)}>
            <Text decoration="line" className={cx.oldPrice}>
              {price}
            </Text>
            <Heading tag="h2">{price - sale}</Heading>
          </div>
          <Text size="thin" className={cx.space}>
            выберите размер
          </Text>
          <div className={cx.sizes}>
            <Button size="small">40-42</Button>
            <Button size="small">42-44</Button>
            <Button size="small" disable>
              44-46
            </Button>
            <Button size="small">46-48</Button>
          </div>
          <Button size="small" className={cx.space}>
            купить сейчас
          </Button>
          <Text decoration="underline" className={cx.space}>
            характеристики
          </Text>
          <div className={classNames(cx.line, cx.space)}></div>
          <Collapse
            title={'описание'}
            content={<Text size="thin">{description}</Text>}
            moreText={'показать больше'}
            lessText={'показать меньше'}
            hideCollapseIcon
          />
          <div className={classNames(cx.line, cx.space)}></div>
          <Collapse title={'о товаре'} content={<ProductInfo />} />
          <Text decoration="underline" className={'pointer'}>
            таблица размеров
          </Text>
        </div>
      </div>
    </Modal>
  );
};

export default PreviewProductModal;
