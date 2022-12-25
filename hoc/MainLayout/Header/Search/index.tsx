import Image from 'next/image';
import searchLogo from '@/static/icons/serch.svg';
import cx from './index.module.scss';
import { useState } from 'react';

interface IProps {
  isVisiblePopUpHandle: (isVisible: boolean) => void;
}

const MainPageSearch = ({ isVisiblePopUpHandle }: IProps) => {
  return (
    <div className={cx.search__panel}>
      <input
        className={cx.search__panel__input}
        type="search"
        placeholder="А что мы тут ищем?"
      />
      <Image
        src={searchLogo}
        alt="searchLogo"
        onClick={() => isVisiblePopUpHandle(true)}
      ></Image>
    </div>
  );
};

export default MainPageSearch;
