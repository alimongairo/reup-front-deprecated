import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import DropDown, { IDropDownItem } from '@/components/common/DropDown';

import { EPagesRoutes } from '@/constants/router';
import profile from '@/static/icons/profile.svg';

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
          <button>Мои заказы</button>
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
