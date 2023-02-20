import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import DropDown, { IDropDownItem } from '@/components/common/DropDown';

import { EPagesRoutes } from '@/constants/router';
import profile from '@/static/icons/profile.svg';
import Button from '@/components/common/Button';

const DropDownProfile = () => {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible((state) => !state);
  };

  const overlay: IDropDownItem[] = [
    {
      id: 0,
      label: (
        <Link href={EPagesRoutes.OrderHistory}>
          <Button>Мои заказы</Button>
        </Link>
      ),
    },
    {
      id: 1,
      label: (
        <Link href={EPagesRoutes.Auth}>
          <Button>Войти</Button>
        </Link>
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
