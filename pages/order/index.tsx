import OrderLayout from '@/components/Ordering';
import MainLayout from '@/layouts/MainLayout';

const OrderPage = () => {
  return (
    <MainLayout>
      <OrderLayout isLogined />;
    </MainLayout>
  );
};

export default OrderPage;
