import cx from './index.module.scss';
import Link from 'next/link';

import { EPagesRoutes } from '@/constants/router';

const MainPageNavigation = () => {
  return (
    <div className={cx.navbar}>
      <ul className={cx.navbar__list}>
        <li>
          <Link className={cx.link} href={EPagesRoutes.Category}>
            <h3>локальные бренды</h3>
          </Link>
        </li>
        <li>
          <Link className={cx.link} href={EPagesRoutes.Category}>
            <h3>vintage</h3>
          </Link>
        </li>
        <li>
          <Link className={cx.link} href={EPagesRoutes.Category}>
            <h3>селективные сэконд-хэнды</h3>
          </Link>
        </li>
        <li>
          <Link className={cx.link} href={EPagesRoutes.Category}>
            <h3>upcycle</h3>
          </Link>
        </li>
        <li>
          <Link className={cx.link} href={EPagesRoutes.Category}>
            <h3>вторые ручки</h3>
          </Link>
        </li>
        <li>
          <Link className={cx.linkSale} href={EPagesRoutes.Category}>
            <h3>sale</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainPageNavigation;
