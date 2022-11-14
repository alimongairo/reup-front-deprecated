import Link from 'next/link';
import { EPagesRoutes } from '@/constants/router';

import { Affix, Button } from 'antd';

import cx from './index.module.scss';

interface IProps {
  total: number;
}

const BasketBuyButton = ({ total }: IProps) => {
  return (
    <>
      <Affix offsetBottom={0}>
        <div className={cx.wrapper}>
          <div>Total: {total}$</div>
          <Link href={`${EPagesRoutes.Basket}/`}>
            <Button type="primary">Перейти к покупке</Button>
          </Link>
        </div>
      </Affix>
    </>
  );
};

export default BasketBuyButton;
