import Image from 'next/image';
import { ReactNode, useState } from 'react';
import classNames from 'classnames';

import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import OrderDetailModal from '@/components/OrderHistory/OrderItem/OrderDetailModal';

import product from 'static/img/smallProduct_remove.png';

import cx from './index.module.scss';

interface IProps {
  actionNode?: ReactNode;
}

const OrderItem = ({ actionNode }: IProps) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((state) => !state);
  };

  return (
    <div className={cx.wrapper}>
      <div className={cx.header}>
        <Text size="big" className={cx.num}>
          №200493 / в пути
        </Text>
        <div className={cx.price}>
          <Text size="thin">6 товаров</Text>
          <Text size="big" className={cx.price}>
            7800 ₽
          </Text>
        </div>
      </div>

      <div className={cx.content}>
        <div className={cx.products}>
          <div className={cx.product}>
            <Image className={cx.productImg} src={product} alt={'product'} />
            <Text size={'big'} className={cx.space1}>
              название товара
            </Text>
            <Text size={'thin'} className={cx.space1}>
              название бренда
            </Text>
            <Text size={'thin'} className={cx.space2}>
              размер 44 / синий
            </Text>
          </div>
          <div className={cx.product}>
            <Image className={cx.productImg} src={product} alt={'product'} />
            <Text size={'big'} className={cx.space1}>
              название товара
            </Text>
            <Text size={'thin'} className={cx.space1}>
              название бренда
            </Text>
            <Text size={'thin'} className={cx.space2}>
              размер 44 / синий
            </Text>
          </div>
        </div>
        <div>
          <Text size={'big'} className={cx.space2}>
            дата заказа
          </Text>
          <Text size={'thin'}>9.01.2022</Text>
        </div>
        <div>
          <Text size={'big'} className={cx.space2}>
            способ оплаты
          </Text>
          <Text size={'thin'}>СБП Сбербанк</Text>
        </div>
        <div>
          <Text size={'big'} className={cx.space2}>
            адрес пункта выдачи
          </Text>
          <Text size={'thin'}>СДЭК, 40 лет Победы ул, 7 м. Автозаводская </Text>
        </div>
        <div className={cx.status}>
          {actionNode ? (
            actionNode
          ) : (
            <>
              <Button onClick={toggleVisible}>подробнее</Button>
              <OrderDetailModal visible={visible} onClose={toggleVisible} />
            </>
          )}
          <div className={cx.info}>
            <Text size={'big'} className={classNames(cx.space2, cx.payed)}>
              оплачено
            </Text>
            <Text size={'thin'}>ожидаемая дата доставки: 12 января</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
