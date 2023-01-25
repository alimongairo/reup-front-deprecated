import Tabs from '@/components/common/Tabs';
import Heading from '@/components/common/Heading';
import Orders from '@/components/OrderHistory/Orders';

import cx from './index.module.scss';

const tabs = [
  { id: 1, title: 'активные', content: <Orders isActive /> },
  { id: 2, title: 'завершенные', content: <Orders isActive={false} /> },
];

const OrderHistory = () => {
  return (
    <div>
      <div className={cx.heading}>
        <Heading>мои заказы</Heading>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default OrderHistory;
