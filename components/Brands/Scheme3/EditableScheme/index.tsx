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
    <div className={cx.gallery}>
      <div className={cx.banner}>
        <Button transparent className={cxM.uploadBtn}>
          добавить фото / видео
        </Button>
      </div>
    </div>
  );
};

const EditableScheme = () => {
  return (
    <>
      <HeaderForEdit /> <FirstPage rightContent={<RigtContent />} />
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
