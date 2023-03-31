import Heading from '@/components/common/Heading';
import Empty from '@/components/Returns/Empty';
import ReturnsList from '@/components/Returns/Returns';

import cx from './index.module.scss';

const returnsDataSource = [1];

const ReturnsLayout = () => {
  return (
    <div className={cx.wrapper}>
      <Heading className={cx.title}>возвраты</Heading>
      {Boolean(!returnsDataSource.length) && <Empty />}
      {Boolean(returnsDataSource.length) && <ReturnsList />}
    </div>
  );
};

export default ReturnsLayout;
