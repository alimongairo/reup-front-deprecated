import { useState } from 'react';
import cx from 'classnames';
import SearchPopUpList from '@/hoc/MainLayout/Header/SearchPopUp/SearchPopUpList';
import style from './index.module.scss';

interface IProps {
  isVisible: boolean;
}

const SearchPopUp = ({ isVisible }: IProps) => {
  return (
    <div
      className={cx({
        [style.main_searchContainer_isActive]: isVisible,
        [style.main_searchContainer]: !isVisible,
      })}
    >
      <SearchPopUpList />
    </div>
  );
};

export default SearchPopUp;
