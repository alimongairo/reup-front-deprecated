import Link from 'next/link';

import cx from './index.module.scss';

const MainPageNavigation = ()=>{
    return <div className={cx.navbar}>
        <ul className={cx.navbar__list}>
            <li><h3>новинки</h3></li>
            <li><h3>локальные бренды</h3></li>
            <li><h3>выбор REUP</h3></li>
            <li><h3>винтажные изделия</h3></li>
            <li><h3>ювелирные изделия</h3></li>
            <li><h3>вторые ручки</h3></li>
        </ul>
    </div>
}

export default MainPageNavigation;