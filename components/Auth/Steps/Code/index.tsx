import { useContext } from 'react';
import { useRouter } from 'next/router';

import Text from '@/components/common/Text';
import Input from '@/components/common/Input';
import { AuthContext } from '@/components/Auth/context';
import A from '@/components/common/A';

import { EPagesRoutes } from '@/constants/router';

import cx from './index.module.scss';
import Frame from '@/components/common/Frame';

const CodeStep = () => {
  const contextValue = useContext(AuthContext);
  const router = useRouter();

  const onClose = () => {
    contextValue?.onClose();
  };

  return (
    <Frame
      title="вход в личный кабинет"
      onClose={onClose}
      onBack={contextValue?.decStep}
    >
      <Text className={cx.supportText}>
        введите код, который мы отправили вам на электронную почту.
      </Text>
      <Input codeInput />
      <div className={cx.footer}>
        <Text size="thin">отправить повторно через {5} секунд</Text>
        <Text
          className={cx.sendCode}
          size="big"
          onClick={contextValue?.incStep}
        >
          отправить код
        </Text>
      </div>
    </Frame>
  );
};

export default CodeStep;
