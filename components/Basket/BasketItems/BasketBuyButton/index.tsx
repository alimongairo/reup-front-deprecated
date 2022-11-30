import Link from 'next/link';
import { Affix, Button } from 'antd';
import { EPagesRoutes } from '@/constants/router';
import cx from './index.module.scss';

interface IProps {
  total: number;
}

const BasketBuyButton = ({ total }: IProps) => {
  return (
    <Affix offsetBottom={0}>
      <div className={cx.wrapper}>
        <div>Total: {total} ₽</div>
        <Link href={`${EPagesRoutes.Order}/`}>
          <Button type="primary">Перейти к покупке</Button>
        </Link>
        <Link href={`${EPagesRoutes.UnauthorizedOrder}/`}>
          <Button type="primary">Перейти к покупке, unauthorized</Button>
        </Link>
      </div>
    </Affix>
  );
};

export default BasketBuyButton;
