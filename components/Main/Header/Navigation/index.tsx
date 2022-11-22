import cx from './index.module.scss';

const MainPageNavigation = ()=>{
    return <div className={cx.navbar}>
        <ul className={cx.navbar__list}>
            <li><h3>Новинки</h3></li>
            <li><h3>Акции</h3></li>
            <li><h3>PageName</h3></li>
            <li><h3>PageName</h3></li>
            <li><h3>PageName</h3></li>
        </ul>
    </div>
}

export default MainPageNavigation;