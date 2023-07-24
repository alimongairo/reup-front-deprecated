import Input from '@/components/common/Input';
import searchLogo from '@/static/icons/serch.svg';
import Image from 'next/image';
import cx from './index.module.scss';
import { useEffect, useState } from 'react';

const DropdownSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isDropdown, setIsDropdown] = useState<boolean>(false);

  // const onSearch = () => {

  // }

  useEffect(() => {
    if (searchValue) {
      setIsDropdown(false);
    }
  }, [searchValue]);

  return (
    <div className={cx.searchWrapper}>
      <Input
        placeholder="поиск"
        spellCheck={false}
        className={cx.input}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        // onKeyDown={onSearch}
      />
      <Image
        src={searchLogo}
        alt="searchLogo"
        // onClick={() => setVisible(true)}
        width={18}
        height={18}
        style={{ cursor: 'pointer' }}
        className={cx.searchIcon}
      />
    </div>
  );
};

export default DropdownSearch;
