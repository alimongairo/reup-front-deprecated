import { useMemo } from 'react';
import Image from 'next/image';
import Select from '@/components/common/Select';
import { TProductCard } from '@/store/productDetail/type';
import ArrowDown from '@/static/icons/arrow-down.svg';
import cx from './index.module.scss';

type IProps = {
  onClickBasket: (id: number) => void;
  id: number;
  dataSourse: TProductCard;
};

const Price = ({ onClickBasket, id, dataSourse }: IProps) => {
  const sizesOption = useMemo(() => {
    return (
      dataSourse?.sizes.map((i) => ({
        id: i,
        value: i,
        label: String(i),
      })) || []
    );
  }, [dataSourse]);

  return (
    <div className={cx.btnPrice}>
      <div className={cx.price}>
        <span className={cx.throughPrice}>{dataSourse.oldPrice} </span>
        <span className={cx.activePrice}>{dataSourse.price}</span>
      </div>
      <div className={cx.chooseSize}>
        <Select title="выбрать размер" options={sizesOption} />
        <Image className={cx.arrowDown} src={ArrowDown} alt="sizes" />
      </div>
      <div className={cx.appCart}>
        <button onClick={() => onClickBasket(id)}>добавить в корзину</button>
      </div>
    </div>
  );
};

export default Price;
