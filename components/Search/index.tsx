import Image from 'next/image';
import searchLogo from '@/static/icons/serch.svg';
import cx from './index.module.scss';
import { useState } from 'react';

const Search = () => {
  
  const [modalSearch, setModalSearch] = useState(false);

  return (
    <div className={cx.search__panel}>
      <Image src={searchLogo} alt="searchLogo"></Image>
    </div>
  );
};

export default Search;
