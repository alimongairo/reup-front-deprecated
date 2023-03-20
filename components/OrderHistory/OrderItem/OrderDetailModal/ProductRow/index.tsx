import Image from 'next/image';

import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';

import product from '@/static/img/product3.png';

import cx from './index.module.scss';

const ProductRow = () => {
  return (
    <div className={cx.row}>
      <Image src={product} alt={'product'} />
      <div className={cx.content}>
        <div>
          <Heading tag={'h3'}>Топ Trendyol</Heading>
          <Text size="big">7800 ₽</Text>
        </div>
        <div>
          <Text>Топ Trendyol</Text>
          <Text size="thin">15 000 ₽</Text>
        </div>
        <Text size="thin" className={cx.flex}>
          Befree
        </Text>
        <Text size="thin">цвет: черный</Text>
        <Text size="thin">размер: 46</Text>
      </div>
    </div>
  );
};

export default ProductRow;
