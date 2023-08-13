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
            key={product.vendor_id}
            {...product}
            like={true}
            onLike={(vendor_id) => console.log(`on like ${vendor_id}`)}
            onAddToBasket={(vendor_id) =>
              console.log('on add basket', vendor_id)
            }
          />
        );
      })}
    </div>
  );
};

export default List;
