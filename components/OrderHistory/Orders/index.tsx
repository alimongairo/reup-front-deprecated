import { useRouter } from 'next/router';

import OrderItem from '@/components/OrderHistory/OrderItem';

import { useAppDispatch } from '@/hooks/store';
import { EPagesRoutes } from '@/constants/router';

interface IProps {
  isActive: boolean;
}

const Orders = ({ isActive }: IProps) => {
  const router = useRouter();

  const goToMainPage = () => {
    router.push(EPagesRoutes.Main);
  };

  // if (!dataSource.length) {
  //   return (
  //     <div>
  //       <Heading tag="h2" style={{ marginBottom: '2rem' }}>
  //         здесь пока нет заказов может, Вы еще не нашли то, что искали?
  //       </Heading>
  //       <Button onClick={goToMainPage}>отправиться на поиски</Button>
  //     </div>
  //   );
  // }

  return (
    <>
      {/*{dataSource.map((item) => (*/}
      <OrderItem key={1} />
      <OrderItem key={2} />
      {/*))}*/}
    </>
  );
};

export default Orders;
