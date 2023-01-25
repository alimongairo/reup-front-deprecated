import { useContext } from 'react';

import Frame from '@/components/common/Frame';
import Text from '@/components/common/Text';
import Input from '@/components/common/Input';
import { AuthContext } from '@/components/Auth';

const CodeStep = () => {
  const contextValue = useContext(AuthContext);
  return (
    <Frame title="вход в личный кабинет" onBack={contextValue?.decStep}>
      <Text>введите код, который мы отправили вам на электронную почту.</Text>
      <Input />
      <Text>отправить повторно через 5 секунд</Text>
      <Text onClick={contextValue?.incStep}>отправить код</Text>
    </Frame>
  );
};

export default CodeStep;
