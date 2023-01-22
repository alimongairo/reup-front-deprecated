import Image from 'next/image';

import Text from '@/components/common/Text';

import { TOrderHistoryItem } from '@/store/orderHistory/type';
import arrowDown from '@/static/icons/downArrow.svg';

import cx from './index.module.scss';

const OrderItem = ({
  num,
  deliveryDate,
  isPaid,
  oldPrice,
  price,
  previewImages,
  orderDate,
  paymentMethod,
  wayToGet,
  status,
  isClosed = false,
}: TOrderHistoryItem & { isClosed: boolean }) => {
  return (
    <div className={cx.wrapper}>
      <h3 className={cx.num}>{num}</h3>
      <div className={cx.content}>
        <div>
          <div className={cx.row}>
            <Text>6 товаров</Text>
            <div className={cx.prices}>
              {oldPrice && <span className={cx.oldPrice}>{oldPrice} ₽</span>}
              <span className={cx.price}>{price} ₽</span>
            </div>
          </div>
          <div className={cx.images}>
            {previewImages.map((item, i) => (
              <Image key={i} src={item} alt={'preview'} width="81" />
            ))}
          </div>
          <div className={cx.more}>
            <Text>подробнее</Text>
            <Image src={arrowDown} alt={'arrowDown'} />
          </div>
        </div>
        <div className={cx.center}>
          <div>
            <h4>дата заказа</h4>
            <Text size="normal">{orderDate}</Text>
          </div>
          <div>
            <h4>способ оплаты</h4>
            <Text size="normal">{paymentMethod}</Text>
          </div>
          <div>
            <h4>способ получения</h4>
            <Text size="normal">пункт выдачи: {wayToGet.pointOfIssue}</Text>
            <Text size="normal">получатель: {wayToGet.recipient}</Text>
          </div>
          {isClosed && (
            <div>
              <button>оформить возврат</button>
            </div>
          )}
        </div>
        <div className={cx.status}>{status}</div>
      </div>
      <div className={cx.footer}>
        <Text>Ожидаемая дата доставки: {deliveryDate}</Text>
        <div className={cx.isPaid}>{isPaid ? 'Оплачено' : 'Не оплачено'}</div>
      </div>
    </div>
  );
};

export default OrderItem;
