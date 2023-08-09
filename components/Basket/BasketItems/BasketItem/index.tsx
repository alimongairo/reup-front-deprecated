import Image from 'next/image';
import { useState } from 'react';

import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import Counter from '@/components/common/Counter';
import Checkbox from '@/components/common/Checkbox';
import deleteSvg from '@/static/icons/delete.svg';

import cx from './index.module.scss';

import productImg from 'static/img/product3.png';

const BasketItem = () => {
  const [count, setCount] = useState(0);

  const onChangeCount = (value: number) => {
    setCount(value);
  };

  const onDeleteitem = () => {
    // remove from items with ssr
    console.log('onDeleteitem');
  };

  return (
    <div className={cx.wrapper}>
      <Image src={productImg} alt={'product'} />
      <div className={cx.content}>
        <div className={cx.row}>
          <Text size={'big'}>Топ Trendyol</Text>
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
      <div className={cx.right}>
        <Checkbox />
        <Image
          src={deleteSvg}
          alt="delete"
          className={cx.deleteSvg}
          onClick={onDeleteitem}
        />
      </div>
    </div>
  );
};

export default BasketItem;
