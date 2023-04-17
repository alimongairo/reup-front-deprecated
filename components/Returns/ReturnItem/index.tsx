import Heading from '@/components/common/Heading';
import Summary from '@/components/Returns/ReturnItem/Summary';
import Row from '@/components/Returns/ReturnItem/Row';

import cx from './index.module.scss';

const ReturnItemLayout = () => {
  return (
    <div className={cx.wrapper}>
      <Heading className={cx.title}>возвраты</Heading>
      <div className={cx.line}></div>
      <Summary />
      <div className={cx.line}></div>
      <Row />
      <div className={cx.line}></div>
      <Row />
      <div className={cx.line}></div>
      <Row />
      <div className={cx.line}></div>
    </div>
  );
};

export default ReturnItemLayout;
