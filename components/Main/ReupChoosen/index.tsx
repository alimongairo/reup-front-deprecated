import Image from 'next/image';

import MoreButton from '@/components/common/MoreButton';

import img from '@/static/img/model1.png';
import cx from './index.module.scss';

const ReupChoosen = () => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.info}>
        <h2>НАЗВАНИЕ БРЕНДА</h2>
        <p>
          Наше дело не так однозначно, как может показаться: существующая теория
          напрямую зависит от стандартных подходов. Идейные соображения высшего
          порядка, а также разбавленное изрядной долей
        </p>
        <MoreButton className={cx.moreBtn} />
      </div>
      <div className={cx.imgWrapper}>
        <Image src={img} alt="model1" />
      </div>
    </div>
  );
};

export default ReupChoosen;
