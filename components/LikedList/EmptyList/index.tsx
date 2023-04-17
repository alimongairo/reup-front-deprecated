import { useRouter } from 'next/router';

import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import { EPagesRoutes } from '@/constants/router';

import cx from './index.module.scss';

const EmptyList = () => {
  const router = useRouter();

  const goToMain = () => {
    router.push(EPagesRoutes.Main);
  };

  return (
    <div>
      <Text className={cx.text}>кажется, вам пока ничего не понравилось</Text>
      <Button onClick={goToMain}>отправиться на поиски</Button>
    </div>
  );
};

export default EmptyList;
