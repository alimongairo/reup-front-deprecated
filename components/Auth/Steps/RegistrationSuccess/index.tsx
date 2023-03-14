import { useContext } from 'react';
import { useRouter } from 'next/router';

import Frame from '@/components/common/Frame';
import Text from '@/components/common/Text';
import A from '@/components/common/A';
import { AuthContext } from '@/components/Auth/context';

import { EPagesRoutes } from '@/constants/router';

const SuccessRegistration = () => {
  const contextValue = useContext(AuthContext);
  const router = useRouter();

  const onClose = () => {
    router.push(EPagesRoutes.Main);
  };

  const toProfile = () => {
    router.push(EPagesRoutes.Profile);
  };

  return (
    <Frame
      title="регистрация успешно завершена!"
      onBack={contextValue?.decStep}
      onClose={onClose}
      width="320px"
    >
      <Text size="thin" style={{ marginTop: '1rem' }}>
        добавьте информацию о себе в{' '}
        <Text size="big" onClick={toProfile}>
          личном кабинете
        </Text>
      </Text>
    </Frame>
  );
};

export default SuccessRegistration;
