import { TProductItem } from '@/store/productList/type';
import ProductCard from '@/components/common/ProductCard';

import cx from './index.module.scss';

interface IProps {
  dataSource: TProductItem[];
}

const List = ({ dataSource }: IProps) => {
  return (
    <div className={cx.wrapper}>
      {dataSource.map((product) => {
        return (
          <ProductCard
            key={product.id}
            {...product}
            onLike={(id) => console.log(`on like ${id}`)}
            onAddToBasket={(id) => console.log('on add basket', id)}
          />
        );
      })}
    </div>
  );
};

export default List;
