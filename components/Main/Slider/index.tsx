import cx from './index.module.scss';

const Slider = () => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.leftBlock}>
        <img src="../../../static/Slider/img/SliderOne_one.png" alt="" />
      </div>

      <div className={cx.rightBlock}>
        <div className={cx.upRight}>
          <img src="../../../static/Slider/img/SliderOne_two.png" alt="" />
        </div>
       
        <div className={cx.downRight}>
          <div>
            <h1>Новый бренд</h1>
            <hr />
            <h2>название бренда</h2>
            <p>Наше дело не так однозначно, как может показаться: существующая теория напрямую зависит от стандартных подходов. Идейные соображения высшего порядка, а также разбавленное изрядной долей </p>
            <img className={cx.btn} src="../../../static/Slider/icons/Arrow-big.svg" alt="Arrow big" />
          </div>       
        </div>
      </div>

      <div className="arrow-left">
        <img src="../../../static/Slider/icons/Arrow-left.svg" alt="Arrow left" />
      </div>

      <div className="arrow-right">
        <img src="../../../static/Slider/icons/Arrow-right.svg" alt="Arrow right" />
      </div>
      
    </div>
  ) 
};

export default Slider;
