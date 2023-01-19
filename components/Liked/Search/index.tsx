import Image from 'next/image';
import searchLogo from '@/static/icons/serch.svg'
import cx from './index.module.scss';

const Search = ()=>{
    return (
    <div className={cx.search__panel}>
        <input className={cx.search__panel__input} type="search" placeholder='поиск товара'/>
        <Image src={searchLogo} alt='searchLogo'></Image>
    </div>
)}

export default Search