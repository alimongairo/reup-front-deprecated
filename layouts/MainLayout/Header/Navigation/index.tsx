import { useRouter } from 'next/router';

import Text from '@/components/common/Text';

import { EPagesRoutes } from '@/constants/router';

import cx from './index.module.scss';

const MainPageNavigation = () => {
  const routing = useRouter();

  const goToCategory = (category: string) => {
    const searchParams = new URLSearchParams({ category });
    routing.push(`${EPagesRoutes.Category}?${searchParams}`);
  };

  const goToSale = () => {
    routing.push(EPagesRoutes.Sale);
  };

  return (
    <div className={cx.navbar}>
      <Text
        size="thin"
        className={cx.navbarItem}
        onClick={() => goToCategory('локальные бренды')}
      >
        локальные бренды
      </Text>
      <Text
        size="thin"
        className={cx.navbarItem}
        onClick={() => goToCategory('vintage')}
      >
        vintage
      </Text>
      <Text
        size="thin"
        className={cx.navbarItem}
        onClick={() => goToCategory('селективные секонд-хенды')}
      >
        селективные секонд-хенды
      </Text>
      <Text
        size="thin"
        className={cx.navbarItem}
        onClick={() => goToCategory('upcycle')}
      >
        upcycle
      </Text>
      <Text size="thin" className={cx.navbarItem} onClick={goToSale}>
        sale
      </Text>
    </div>
  );
};

export default MainPageNavigation;
