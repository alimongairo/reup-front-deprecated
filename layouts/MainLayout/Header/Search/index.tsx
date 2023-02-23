import SearchResult from '@/components/SearchResult';
import { EPagesRoutes } from '@/constants/router';
import searchLogo from '@/static/icons/serch.svg';
import Image from 'next/image';
import Link from 'next/link';
import cx from './index.module.scss';

const MainPageSearch = ()=>{
    return (
    <div className={cx.search__panel}>
        <input className={cx.search__panel__input} type="search" placeholder='А что мы тут ищем?'/>
        <Link href={`${EPagesRoutes.SearchResult}`}>
            <Image src={searchLogo} alt='searchLogo'></Image>
        </Link>   
    </div>
)}

export default MainPageSearch