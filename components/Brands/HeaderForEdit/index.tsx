import Image from 'next/image';
import { useState } from 'react';

import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';
import Menu from '@/components/Brands/Menu';

import menuSvg from '@/static/icons/menu.svg';
import cx from './index.module.scss';

const HeaderForEdit = () => {
  const [visibleMenu, setVisibleMenu] = useState(true);

  const toggleMenu = () => setVisibleMenu((state) => !state);

  return (
    <div className={cx.wrapper}>
      <Heading>страница бренда</Heading>
      <div className={cx.actions}>
        <Button size="small">выход</Button>
        <Button size="small">превью</Button>
        <Button
          size="small"
          active={visibleMenu}
          className={cx.ddBtn}
          onClick={toggleMenu}
        >
          <Image src={menuSvg} alt={''} />
        </Button>
        <Menu visible={visibleMenu} />
      </div>
    </div>
  );
};

export default HeaderForEdit;
