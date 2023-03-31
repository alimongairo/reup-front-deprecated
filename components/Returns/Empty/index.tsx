import Text from '@/components/common/Text';
import Heading from '@/components/common/Heading';

import cx from './index.module.scss';

const Empty = () => {
  return (
    <>
      <Text>здесь пока нет возвратов</Text>
      <Heading tag={'h2'} className={cx.subTitle}>
        рассказываем, как оформить возврат
      </Heading>
    </>
  );
};

export default Empty;
