import { useContext } from 'react';
import { useRouter } from 'next/router';

import Frame from '@/components/common/Frame';
import Text from '@/components/common/Text';
import A from '@/components/common/A';
import { RegistrationContext } from '@/components/Registration/context';

import { EPagesRoutes } from '@/constants/router';

import cx from '../index.module.scss';

const SuccessRegistration = () => {
  const contextValue = useContext(RegistrationContext);
  const router = useRouter();

  const onClose = () => {
    router.push(EPagesRoutes.Main);
  };

  return (
    <Frame
      title="регистрация успешно завершена!"
      onBack={contextValue?.decStep}
      onClose={onClose}
    >
      <Text className={cx.success}>
        добавьте информацию о себе в{' '}
        <A href={EPagesRoutes.Main}>личном кабинете</A>
      </Text>
    </Frame>
  );
};

export default SuccessRegistration;
