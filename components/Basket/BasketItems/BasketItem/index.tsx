import Image from 'next/image';
import { useState } from 'react';

import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import Counter from '@/components/common/Counter';
import Checkbox from '@/components/common/Checkbox';

import cx from './index.module.scss';

import productImg from 'static/img/product3.png';

const BasketItem = () => {
  const [count, setCount] = useState(0);

  const onChangeCount = (value: number) => {
    setCount(value);
  };

  return (
    <div className={cx.wrapper}>
      <Image src={productImg} alt={'product'} />
      <div className={cx.content}>
        <div className={cx.row}>
          <Heading tag={'h4'}>Топ Trendyol</Heading>
          <Heading tag={'h3'}>10 000 ₽</Heading>
        </div>
        <div className={cx.row}>
          <Text>топ</Text>
          <Text size={'thin'}>15 000 ₽</Text>
        </div>
        <div>
          <Text size={'thin'}>цвет: черный</Text>
          <Text size={'thin'}>размер: 46</Text>
        </div>
        <Counter value={count} onChange={onChangeCount} />
      </div>
      <Checkbox />
    </div>
  );
};

export default BasketItem;
