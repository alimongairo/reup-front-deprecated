import MainLayout from '@/layouts/MainLayout';

import OrderHistory from '@/components/OrderHistory';
import SubHeaderLK from '@/components/SubHeaderLK';

const OrderHistoryPage = () => {
  return (
    <MainLayout>
      <SubHeaderLK />
      <OrderHistory />
    </MainLayout>
  );
};

export default OrderHistoryPage;
