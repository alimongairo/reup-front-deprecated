import { useContext } from 'react';
import { useRouter } from 'next/router';

import Frame from '@/components/common/Frame';
import Text from '@/components/common/Text';
import Input from '@/components/common/Input';
import { AuthContext } from '@/components/Auth/context';
import A from '@/components/common/A';

import { EPagesRoutes } from '@/constants/router';

import cx from './index.module.scss';

const CodeStep = () => {
  const contextValue = useContext(AuthContext);
  const router = useRouter();

  const onClose = () => {
    router.push(EPagesRoutes.Main);
  };

  return (
    <Frame
      title="вход в личный кабинет"
      onBack={contextValue?.decStep}
      onClose={onClose}
    >
      <Text className={cx.supportText}>
        введите код, который мы отправили вам на электронную почту.
      </Text>
      <Input codeInput />
      <Text>отправить повторно через {5} секунд</Text>
      <Text onClick={contextValue?.incStep}>
        <A href="#">отправить код</A>
      </Text>
    </Frame>
  );
};

export default CodeStep;
