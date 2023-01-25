import Image from 'next/image';

import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';

import { IOrderDetailItem } from '@/store/orderHistory/type';

import cx from './index.module.scss';

const DetailItem = ({
  color,
  size,
  image,
  price,
  oldPrice,
}: IOrderDetailItem) => {
  return (
    <div className={cx.wrapper}>
      <div>
        <Image src={image} alt="productImg" />
      </div>
      <div className={cx.content}>
        <div>
          <Heading size="medium">Название товара</Heading>
          <Text>название бренда</Text>
        </div>
        <div>
          <Text>
            цвет: {color} размер: {size}
          </Text>
          {oldPrice && (
            <Text size="bold" decoration="line">
              {oldPrice}
            </Text>
          )}
          <Text size="bold">{price}</Text>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
