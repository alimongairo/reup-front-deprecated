import DescriptionHeader from './DescriptionHeader';
import DescriptionMain from './DescriptionMain';
import Price from './Price';
import { TProductCard } from '@/store/productDetail/type';
import cx from './index.module.scss';

type IProps = {
  onAddToBasket: (id: number) => void;
  price:number;
  dataSourse: TProductCard;
  id:number;
};

const DescriptionBlock = ({dataSourse, price, onAddToBasket, id}:IProps) => {

  return (
    <div className={cx.descriptionBlock}>
      <DescriptionHeader dataSourse={dataSourse} />

      <DescriptionMain dataSourse={dataSourse}/>

      <Price id={id} dataSourse={dataSourse} onClickBasket={onAddToBasket} />
    </div>
  );
};

export default DescriptionBlock;
