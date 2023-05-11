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
      {/* <Button className={cx.right}>настройки</Button> */}
      <div className={cx.oneBlock}>
        <Button
          active={router.asPath === EPagesRoutes.Liked}
          className={cx.left}
          onClick={() => goToPage(EPagesRoutes.Liked)}
        >
          избранное
        </Button>

        <Button
          className={cx.right}
          active={router.asPath === EPagesRoutes.OrderHistory}
          onClick={() => goToPage(EPagesRoutes.OrderHistory)}
        >
          мои заказы
        </Button>
      </div>

      <div className={cx.twoBlock}>
        <Button
          className={cx.left}
          active={router.asPath.includes(EPagesRoutes.Returns)}
          onClick={() => goToPage(EPagesRoutes.Returns)}
        >
          возвраты
        </Button>

        <Button
          className={cx.center}
          active={router.asPath === EPagesRoutes.CreateBrand}
          onClick={() => goToPage(EPagesRoutes.CreateBrand)}
        >
          стать продавцом
        </Button>

        <Button
          className={cx.right}
          active={router.asPath === EPagesRoutes.PersonalAccount}
          onClick={() => goToPage(EPagesRoutes.PersonalAccount)}
        >
          мои данные
        </Button>
      </div>
    </div>
  );
};

export default SubHeaderLK;
