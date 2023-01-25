import { useContext } from 'react';
import Link from 'next/link';

import Text from '@/components/common/Text';
import Input from '@/components/common/Input';
import Frame from '@/components/common/Frame';
import { AuthContext } from '@/components/Auth';

import { EPagesRoutes } from '@/constants/router';

const EmailStep = () => {
  const contextValue = useContext(AuthContext);

  return (
    <Frame title="вход в личный кабинет">
      <Text>введите адрес эл.почты</Text>
      <Input placeholder="reup@reup.ru" type="email" />
      <button onClick={contextValue?.incStep}>отправить код</button>
      <Text>
        еще не зарегистрированы?{' '}
        <Link href={EPagesRoutes.Registration}>регистрация</Link>
      </Text>
    </Frame>
  );
};

export default EmailStep;
