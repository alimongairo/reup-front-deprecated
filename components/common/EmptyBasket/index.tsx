import Link from 'next/link';
import { Button } from 'antd';
import { EPagesRoutes } from '@/constants/router';
import cx from './index.module.scss';

const EmptyBasket = () => {
  return (
    <div className={cx.wrapper}>
      <div>Корзина пуста</div>
      <Link href={`${EPagesRoutes.Main}/`}>
        <Button type="link" size="small" className={cx.gotoMainButton}>
          за покупками!
        </Button>
      </Link>
    </div>
  );
};

export default EmptyBasket;
