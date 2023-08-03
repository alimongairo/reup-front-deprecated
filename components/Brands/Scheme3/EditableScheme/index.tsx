import classNames from 'classnames';

import Button from '@/components/common/Button';
import HeaderForEdit from '@/components/Brands/HeaderForEdit';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import MoreButton from '@/components/common/MoreButton';

import cx from './index.module.scss';
import cxM from '@/components/Brands/Scheme3/index.module.scss';

const EditableScheme = () => {
  return (
    <>
      <HeaderForEdit />{' '}
      <div className={cx.gallery}>
        <div className={cx.galleryItem}>
          <Button transparent>добавить фото</Button>
        </div>
        <div className={cx.galleryItem}>
          <Button transparent>добавить фото</Button>
        </div>
        <div className={cx.galleryItem}>
          <Button transparent>добавить фото / видео</Button>
        </div>
        <div className={classNames(cx.galleryItem, cx.text)}>
          <Text size="big">заголовок</Text>
          <Text size="thin">текстовый блок с описанием товара / реклама</Text>
        </div>
      </div>
      <div className={cxM.createRow}>
        <Heading tag="h2" className={cxM.title}>
          создай свой уникальный образ вместе с Balenciaga
        </Heading>
        <MoreButton />
      </div>
    </>
  );
};

export default EditableScheme;
