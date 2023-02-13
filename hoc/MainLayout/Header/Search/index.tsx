import Image from 'next/image';
import searchLogo from '@/static/icons/serch.svg'
import cx from './index.module.scss';

const MainPageSearch = ()=>{
    return (
    <div className={cx.search__panel}>
        <Image src={searchLogo} alt='searchLogo'></Image>
    </div>
)}

export default MainPageSearch