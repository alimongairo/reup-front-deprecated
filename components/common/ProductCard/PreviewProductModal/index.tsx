import Image from 'next/image';
import classNames from 'classnames';

import Modal from '@/components/common/Modal';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import Collapse from '@/components/common/Collapse';
import ProductInfo from '@/components/common/ProductCard/PreviewProductModal/ProductInfo';
import Slider from '@/components/common/ProductCard/PreviewProductModal/Slider';

import cx from './index.module.scss';
import ledy from 'static/img/ledy.png';
import like from 'static/icons/like.svg';

interface IProps {
  visible: boolean;
  onClose: () => void;
}

const slides: Array<{ id: number; img: any }> = [
  {
    id: 0,
    img: ledy,
  },
  {
    id: 1,
    img: ledy,
  },
  {
    id: 2,
    img: ledy,
  },
  {
    id: 3,
    img: ledy,
  },
];

const mockText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ';

const PreviewProductModal = ({ visible, onClose }: IProps) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <div className={cx.contentWrapper}>
        <Slider slides={slides} />
        <div className={cx.info}>
          <div className={cx.heading}>
            <Heading tag="h2">Блузка женская “Лэйди”</Heading>
            <Image src={like} alt={'like'} />
          </div>
          <Text size="big" className={cx.space}>
            Befree
          </Text>
          <Text size="thin" className={classNames(cx.code, cx.space)}>
            03289
          </Text>
          <div className={classNames(cx.price, cx.space)}>
            <Text decoration="line" className={cx.oldPrice}>
              3990
            </Text>
            <Heading tag="h2">1990</Heading>
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
            content={<Text size="thin">{mockText}</Text>}
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
