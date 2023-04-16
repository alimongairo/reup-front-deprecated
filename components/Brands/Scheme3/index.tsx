import Image from 'next/image';
import classNames from 'classnames';

import FirstPage from '@/components/Brands/Scheme3/FirstPage';
import Heading from '@/components/common/Heading';
import MoreButton from '@/components/common/MoreButton';
import Text from '@/components/common/Text';
import ProductList from '@/components/Brands/ProductList';

import img1 from './img.png';
import img2 from './Rectangle 930 (1).png';
import img3 from './Rectangle 931.png';
import img4 from './Rectangle 932 (1).png';
import img5 from './Rectangle 932.png';

import cx from './index.module.scss';

const Scheme3 = () => {
  return (
    <div>
      <FirstPage />
      <div className={cx.createRow}>
        <Heading tag="h2" className={cx.title}>
          создай свой уникальный образ вместе с Balenciaga
        </Heading>
        <MoreButton />
      </div>
      <div className={cx.cards}>
        <div className={cx.card}>
          <Image src={img1} alt={'img'} />
        </div>
        <div className={cx.card}>
          <Image src={img3} alt={'img'} />
        </div>
        <div className={cx.card}>
          <Image src={img2} alt={'img'} />
        </div>

        <div className={cx.card}>
          <Image src={img4} alt={'img'} />
        </div>
        <div className={classNames(cx.card, cx.text)}>
          <Heading tag="h2">чикипум</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Purus a luctus ultricies at
            et enim sed pharetra. Blandit ultrices non rhoncus ultrices aliquam.
            Nunc at turpis consequat cras. Varius aenean sem natoque metus.
          </Text>
        </div>
        <div className={cx.card}>
          <Image src={img5} alt={'img'} />
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default Scheme3;
