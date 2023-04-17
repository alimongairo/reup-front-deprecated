import Image from 'next/image';

import Text from '@/components/common/Text';
import MoreButton from '@/components/common/MoreButton';
import Heading from '@/components/common/Heading';

import cx from './index.module.scss';

import img from './img.png';

const FirstPage = () => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.leftSide}>
        <Heading>Balenciaga</Heading>
        <Text className={cx.aboutText}>Текст описание от бренда</Text>
      </div>
      <div className={cx.rightSide}>
        <Image src={img} alt={'promo'} />
        <div className={cx.nav}>
          <div className={cx.navItems}>
            <Text>текст</Text>
            <Text>текст</Text>
            <Text>текст</Text>
            <Text>текст</Text>
            <Text>текст</Text>
          </div>
          <MoreButton />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
