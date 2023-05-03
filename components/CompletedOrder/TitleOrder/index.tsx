import Heading from '@/components/common/Heading';
import cx from './index.module.scss';
import BackButton from '../BackButton';

const TitleOrder = () => {
  return (
    <div className={cx.titleOrder}>
      <BackButton />
      <Heading tag="h1">оформление заказа</Heading>
    </div>
  );
};

export default TitleOrder;
