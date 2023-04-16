import { useRouter } from 'next/router';

import OrderItem from '@/components/OrderHistory/OrderItem';
import { EPagesRoutes } from '@/constants/router';
import Button from '@/components/common/Button';

interface IProps {
  dataSource: Array<any>; //TODO поменять
}

const ToReturnItem = ({ id }: { id: number }) => {
  const router = useRouter();

  const goToReturnItem = () => {
    router.push(`${EPagesRoutes.ReturnItem}/${id}`);
  };

  return <Button onClick={goToReturnItem}>посмотреть полностью</Button>;
};

const ReturnsList = () => {
  return (
    <div>
      <OrderItem actionNode={<ToReturnItem id={1} />} />
      <OrderItem actionNode={<ToReturnItem id={2} />} />
      <OrderItem actionNode={<ToReturnItem id={3} />} />
      <OrderItem actionNode={<ToReturnItem id={4} />} />
    </div>
  );
};

export default ReturnsList;
