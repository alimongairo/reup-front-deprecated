import cx from './index.module.scss';

const Category = () => {
  return (
    <div className={cx.wrapper}>
      <button>локальные бренды</button>
      <button>парфюм</button>
      <button>обувь</button>
      <button>винтаж</button>
      <button>аксессуары</button>
      <button>ювелирака</button>
      <button>Upcycle</button>
      <button>вторые ручки</button>
    </div>
  );
};

export default Category;
