import OrderLayout from '@/components/Order';

const unauthorizedOrderPage = () => {
  return <OrderLayout isLogined={false} />;
};

export default unauthorizedOrderPage;
