import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';
import searchLogo from '@/static/icons/serch.svg';
import cx from './index.module.scss';

const Search = () => {
  const [value, setValue] = useState('');
  // const { searchValue, setSearchValue } = useState('');
  const inputRef = useRef();

  // const onClickClear = () => {
  //   setValue('');
  //   setSearchValue('');
  //   inputRef.current.focus();
  // };

  // const updateSearchValue = useCallback (
  //   setTimeout((str) => {
  //     setSearchValue(str);
  //   }, 300),
  //   [],
  // );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    // updateSearchValue(e.target.value);
  };

  return (
    <div className={cx.search__panel}>
      <input
        className={cx.search__panel__input}
        onChange={onChangeInput}
        value={value}
      />
      <Image src={searchLogo} alt="searchLogo"></Image>
    </div>
  );
};

export default Search;
