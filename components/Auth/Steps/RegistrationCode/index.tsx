import { useContext } from 'react';
import { useRouter } from 'next/router';

import Frame from '@/components/common/Frame';
import Text from '@/components/common/Text';
import Input from '@/components/common/Input';
import A from '@/components/common/A';

import { EPagesRoutes } from '@/constants/router';

import { AuthContext } from '@/components/Auth/context';

import cx from './index.module.scss';

const RegistrationCode = () => {
  const contextValue = useContext(AuthContext);
  const router = useRouter();

  const onClose = () => {
    router.push(EPagesRoutes.Main);
  };
  return (
    <Frame
      title="регистрация"
      onBack={contextValue?.decStep}
      onClose={onClose}
      width="380px"
    >
      <Text size="thin" className={cx.title}>
        введите код, который мы отправили вам на электронную почту.
      </Text>
      <Input codeInput />
      <Text size="thin" className={cx.sendCode}>
        отправить повторно через {5} секунд
      </Text>
      <Text size="big" onClick={contextValue?.incStep}>
        отправить код
      </Text>
    </Frame>
  );
};

export default RegistrationCode;
