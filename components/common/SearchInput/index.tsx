import { useState } from 'react';
import searchLogo from '@/static/icons/serch.svg';

import Image from 'next/image';
import Input from '../Input';

import cx from './index.module.scss';

interface Props {
  value: string;
  onChange: (newValue: string) => void;
}

const SearchInput = ({ value, onChange }: Props) => {
  return (
    <div className={cx.searchWrapper}>
      <Input
        placeholder="поиск"
        spellCheck={false}
        className={cx.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Image
        src={searchLogo}
        alt="searchLogo"
        width={18}
        height={18}
        style={{ cursor: 'pointer' }}
        className={cx.searchIcon}
      />
    </div>
  );
};

export default SearchInput;
