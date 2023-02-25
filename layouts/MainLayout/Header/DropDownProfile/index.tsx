import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import DropDown, { IDropDownItem } from '@/components/common/DropDown';
import Text from '@/components/common/Text';

import { EPagesRoutes } from '@/constants/router';

import profile from '@/static/icons/profile.svg';

import cx from './index.module.scss';

const DropDownProfile = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const onClick = () => {
    setVisible((state) => !state);
  };

  const toOrderHistory = () => {
    router.push(`${EPagesRoutes.OrderHistory}`);
  };

  const toLogin = () => {
    router.push(`${EPagesRoutes.Auth}`);
  };

  const overlay: IDropDownItem[] = [
    {
      id: 0,
      label: (
        <div onClick={toOrderHistory} className={cx.ddItem}>
          <Text>Мои заказы</Text>
        </div>
      ),
    },
    {
      id: 1,
      label: (
        <div onClick={toLogin} className={cx.ddItem}>
          <Text>Войти</Text>
        </div>
      ),
    },
  ];

  return (
    <DropDown
      visible={visible}
      setVisible={onClick}
      overlay={overlay}
      title={<Image src={profile} alt={'Profile'} />}
    />
  );
};

export default DropDownProfile;
