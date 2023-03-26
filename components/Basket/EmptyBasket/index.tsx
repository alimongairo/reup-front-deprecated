import Link from 'next/link';

import { EPagesRoutes } from '@/constants/router';

import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';

import cx from './index.module.scss';

const EmptyBasket = () => {
  return (
    <div className={cx.wrapper}>
      <Heading>корзина</Heading>
      <Text size={'big'}>пока что пусто...</Text>
      <Link href={`${EPagesRoutes.Main}/`} rel={EPagesRoutes.Main}>
        <Button>перейти к покупкам</Button>
      </Link>
    </div>
  );
};

export default EmptyBasket;
