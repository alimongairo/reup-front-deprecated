import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import DropDown, { IDropDownItem } from '@/components/common/DropDown';
import Text from '@/components/common/Text';

import LoginItem from '@/layouts/MainLayout/Header/DropDownProfile/Login';

import { EPagesRoutes } from '@/constants/router';
import ProfileSvg from '@/static/icons/Profile';
import classNames from 'classnames';
import cx from './index.module.scss';

const DropDownProfile = () => {
  const [visible, setVisible] = useState(false);
  const [visibleAuth, setVisibleAuth] = useState(false);
  const router = useRouter();

  const onClick = () => {
    setVisible((state) => !state);
  };

  const toOrderHistory = () => {
    router.push(`${EPagesRoutes.OrderHistory}`);
  };
  
  const toPersonalAccount = () => {
    router.push(`${EPagesRoutes.PersonalAccount}`);
  };

  const overlay: IDropDownItem[] = useMemo(() => {
    return [
      {
        id: 0,
        label: (
          <div onClick={toPersonalAccount} className={cx.ddItem}>
            <Text size="thin">Мои данные</Text>
          </div>
        ),
      },
      {
        id: 1,
        label: (
          <div className={cx.ddItem}>
            <Text size="thin">Избранное</Text>
          </div>
        ),
      },
      {
        id: 2,
        label: (
          <div onClick={toOrderHistory} className={cx.ddItem}>
            <Text size="thin">Мои заказы</Text>
          </div>
        ),
      },
      {
        id: 3,
        label: (
          <div className={cx.ddItem}>
            <Text size="thin">Возвраты</Text>
          </div>
        ),
      },
      {
        id: 4,
        label: (
          <div className={cx.ddItem}>
            <Text size="thin">Настройки</Text>
          </div>
        ),
      },
      {
        id: 5,
        label: (
          <div className={cx.ddItem}>
            <Text size="thin">Стать продавцом</Text>
          </div>
        ),
      },
      {
        id: 6,
        label: (
          <div className={classNames(cx.lastItem, cx.ddItem)}>
            <LoginItem />
          </div>
        ),
      },
    ];
  }, [visibleAuth]);

  return (
    <DropDown
      visible={visible}
      setVisible={onClick}
      overlay={overlay}
      title={
        <div className={cx.ddTitle}>
          <ProfileSvg active={visible} />
        </div>
      }
    />
  );
};

export default DropDownProfile;
