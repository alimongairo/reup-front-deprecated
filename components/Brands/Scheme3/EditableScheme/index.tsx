import classNames from 'classnames';

import Button from '@/components/common/Button';
import HeaderForEdit from '@/components/Brands/HeaderForEdit';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import MoreButton from '@/components/common/MoreButton';
import FirstPage from '@/components/Brands/Scheme3/FirstPage';
import cx from './index.module.scss';
import cxM from '@/components/Brands/Scheme3/index.module.scss';

const RigtContent = () => {
  return (
    <div className={classNames(cx.banner, cxM.banner)}>
      <Button transparent className={cxM.uploadBtn}>
        добавить фото / видео
      </Button>
    </div>
  );
};

const EditableScheme = () => {
  return (
    <>
      <HeaderForEdit />
      <FirstPage rightContent={<RigtContent />} className={cx.firstPage} />
      <div className={cxM.createRow}>
        <Heading tag="h2" className={cxM.title}>
          создай свой уникальный образ вместе с Balenciaga
        </Heading>
        <MoreButton />
      </div>

      <div className={cxM.cards}>
        <div className={cxM.card}>
          <div className={classNames(cx.banner, cxM.banner)}>
            <Button transparent className={cxM.uploadBtn}>
              добавить фото / видео
            </Button>
          </div>
        </div>
        <div className={cxM.card}>
          <div className={classNames(cx.banner, cxM.banner)}>
            <Button transparent className={cxM.uploadBtn}>
              добавить фото / видео
            </Button>
          </div>
        </div>
        <div className={cxM.card}>
          <div className={classNames(cx.banner, cxM.banner)}>
            <Button transparent className={cxM.uploadBtn}>
              добавить фото / видео
            </Button>
          </div>
        </div>
        <div className={cxM.card}>
          <div className={classNames(cx.banner, cxM.banner)}>
            <Button transparent className={cxM.uploadBtn}>
              добавить фото / видео
            </Button>
          </div>
        </div>
        <div className={classNames(cxM.card, cxM.text)}>
          <Heading tag="h2">заголовок</Heading>
          <Text>основной текст</Text>
        </div>
        <div className={cxM.card}>
          <div className={classNames(cx.banner, cxM.banner)}>
            <Button transparent className={cxM.uploadBtn}>
              добавить фото / видео
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditableScheme;
