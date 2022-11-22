import cx from './index.module.scss';

const MainPageNavigation = ()=>{
    return <div className={cx.navbar}>
        <ul className={cx.navbar__list}>
            <li><h3>Новинки</h3></li>
            <li><h3>Локальные бренды</h3></li>
            <li><h3>Выбор REUP</h3></li>
            <li><h3>Винтажные изделия</h3></li>
            <li><h3>Ювелирные изделия</h3></li>
            <li><h3>Вторые ручки</h3></li>
        </ul>
    </div>
}

export default MainPageNavigation;