import { EPagesRoutes } from '@/constants/router';
import Link from 'next/link';
import cx from './index.module.scss';

const Slider = () => {
  return (
    <div className={cx.wrapper}>
      
      <div className={cx.arrowLeft}>
        <img src="../../../static/Slider/icons/Arrow-left.svg" alt="Arrow left" />
      </div>

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
            <div className={cx.borderTop}>
              <h2>название бренда</h2>
              <p>Наше дело не так однозначно, как может показаться: существующая теория напрямую зависит от стандартных подходов. Идейные соображения высшего порядка, а также разбавленное изрядной долей </p>
            </div> 
            <Link href={`${EPagesRoutes.Brand}/`}>
              <button className={cx.btn}>
                <img src="../../../static/Slider/icons/Arrow-big.svg" alt="Arrow big" />
              </button>
            </Link>                   
          </div>       
        </div>
      </div>

      <div className={cx.arrowRight}>
        <img src="../../../static/Slider/icons/Arrow-right.svg" alt="Arrow right" />
      </div>    
    </div>
  ) 
};

export default Slider;
