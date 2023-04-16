import Link from 'next/link';
import { Button } from 'antd';

import { EPagesRoutes } from '@/constants/router';

import cx from './index.module.scss';

const FirstRow = () => {
  return (
    <div className={cx.firstRow}>
      <div className={cx.title}>ваш заказ</div>
      <Link href={`${EPagesRoutes.Basket}/`} rel={EPagesRoutes.Basket}>
        <Button type="link" size="small" className={cx.editButton}>
          изменить
        </Button>
      </Link>
    </div>
  );
};

export default FirstRow;
