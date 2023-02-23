import Image from 'next/image';
import searchLogo from '@/static/icons/serch.svg'
import cx from './index.module.scss';
import SearchResult from '@/components/SearchResult';
import Link from 'next/link';
import { EPagesRoutes } from '@/constants/router';

const MainPageSearch = ()=>{
    const searchValue = 'Лэйди'
    return (
    <div className={cx.search__panel}>
        <input className={cx.search__panel__input} type="search" placeholder='А что мы тут ищем?'/>
        <Image src={searchLogo} alt='searchLogo'></Image>
        {searchValue ? 
        <SearchResult searchValue={searchValue}/> 
        : ''}    
    </div>
)}

export default MainPageSearch