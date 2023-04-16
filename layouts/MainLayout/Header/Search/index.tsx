import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import SearchHistory from '@/layouts/MainLayout/Header/Search/SearchHistory';
import Products from '@/layouts/MainLayout/Header/Search/Products';

import searchLogo from '@/static/icons/serch.svg';
import close from '@/static/icons/close.svg';

import cx from './index.module.scss';

interface IProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const MainPageSearch = ({ visible, setVisible }: IProps) => {
  const [searchValue, setSearchValue] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible && wrapperRef.current) {
      document.body.style.overflow = 'hidden';
      wrapperRef.current.querySelector('input')?.focus();
      return;
    }
    document.body.style.overflow = 'auto';
  }, [visible]);

  return (
    <>
      <div className={cx.search} ref={wrapperRef}>
        <Image
          src={searchLogo}
          alt="searchLogo"
          onClick={() => setVisible(true)}
          width={18}
          height={18}
          style={{ cursor: 'pointer' }}
        />
        <div className={classNames(cx.ddSearch, { [cx.visible]: visible })}>
          <div className={cx.searchInput}>
            <Input
              placeholder="хочу найти..."
              spellCheck={false}
              className={classNames(cx.input)}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button>найти</Button>
            <Image
              src={close}
              alt={'close'}
              onClick={() => setVisible(false)}
            />
          </div>
          <div className={cx.content}>
            <SearchHistory />
            <Products />
          </div>
        </div>
      </div>
      <span
        className={classNames(cx.closeMask, { [cx.maskVisible]: visible })}
        onClick={() => setVisible(false)}
      ></span>
    </>
  );
};

export default MainPageSearch;
