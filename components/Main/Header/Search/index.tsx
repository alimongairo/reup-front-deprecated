// import {Input} from "antd";

import cx from './index.module.scss';

// const {Search} = Input;

const MainPageSearch = ()=>{
    return (
    <div className={cx.search__panel}>
        <input className={cx.search__panel__input} type="search" placeholder='А что мы тут ищем?' />
    </div>
)}

export default MainPageSearch