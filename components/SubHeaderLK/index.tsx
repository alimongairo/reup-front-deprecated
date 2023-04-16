import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import { EPagesRoutes } from '@/constants/router';

import cx from './index.module.scss';

const SubHeaderLK = () => {
  const router = useRouter();

  const goToPage = (rout: EPagesRoutes) => {
    router.push(rout);
  };

  return (
    <div className={cx.wrapper}>
      <Button className={cx.right}>настройки</Button>
      <Button
        active={router.asPath === EPagesRoutes.Liked}
        className={cx.right}
        onClick={() => goToPage(EPagesRoutes.Liked)}
      >
        избранное
      </Button>
      <Button
        className={cx.left}
        active={router.asPath === EPagesRoutes.OrderHistory}
        onClick={() => goToPage(EPagesRoutes.OrderHistory)}
      >
        мои заказы
      </Button>
      <Button
        className={cx.left}
        active={router.asPath.includes(EPagesRoutes.Returns)}
        onClick={() => goToPage(EPagesRoutes.Returns)}
      >
        возвраты
      </Button>
      <Button className={cx.center}>стать продавцом</Button>
      <Button
        className={cx.center}
        active={router.asPath === EPagesRoutes.PersonalAccount}
        onClick={() => goToPage(EPagesRoutes.PersonalAccount)}
      >
        мои данные
      </Button>
    </div>
  );
};

export default SubHeaderLK;
