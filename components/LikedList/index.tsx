import Heading from '@/components/common/Heading';
import List from '@/components/LikedList/List';
import EmptyList from '@/components/LikedList/EmptyList';

import { TProductItem } from '@/store/productList/type';

import cx from './index.module.scss';

interface IProps {
  dataSource: TProductItem[];
}

const LikedListLayout = ({ dataSource }: IProps) => {
  return (
    <div className={cx.wrapper}>
      <Heading className={cx.pageTitle}>избранное</Heading>
      {!Boolean(dataSource.length) && <EmptyList />}
      {Boolean(dataSource.length) && (
        <>
          <Heading tag={'h2'} className={cx.count}>
            {dataSource.length} товаров
          </Heading>
          <List dataSource={dataSource} />
        </>
      )}
    </div>
  );
};

export default LikedListLayout;
