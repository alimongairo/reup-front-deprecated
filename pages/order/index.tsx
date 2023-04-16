import OrderLayout from '@/components/Order';
import MainLayout from '@/layouts/MainLayout';

const OrderPage = () => {
  return (
    <MainLayout>
      <OrderLayout isLogined />;
    </MainLayout>
  );
};

export default OrderPage;
