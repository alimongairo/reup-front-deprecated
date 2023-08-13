import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import SearchHistory from '@/layouts/MainLayout/Header/Search/SearchHistory';
import Products from '@/layouts/MainLayout/Header/Search/Products';

import { EPagesRoutes } from '@/constants/router';
import searchLogo from '@/static/icons/search.svg';
import close from '@/static/icons/close.svg';

import cx from './index.module.scss';

interface IProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const MainPageSearch = ({ visible, setVisible }: IProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const onSearch = (e: any) => {
    if (e.key === 'Enter' || e.type === 'click') {
      router.push(EPagesRoutes.SearchResult + '?search=' + searchValue);
    }
  };

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
              onKeyDown={(e) => onSearch(e)}
            />
            <Button onClick={onSearch}>найти</Button>
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
