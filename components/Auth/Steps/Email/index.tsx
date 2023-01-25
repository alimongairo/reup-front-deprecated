import React, { useCallback, useContext, useState } from 'react';
import { useRouter } from 'next/router';

import Text from '@/components/common/Text';
import Input from '@/components/common/Input';
import Frame from '@/components/common/Frame';
import A from '@/components/common/A';
import { AuthContext } from '@/components/Auth/context';

import { EPagesRoutes } from '@/constants/router';
import { isValidEmail } from '@/helpers/utils';

const EmailStep = () => {
  const contextValue = useContext(AuthContext);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const router = useRouter();

  const onClose = () => {
    router.push(EPagesRoutes.Main);
  };

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInvalidEmail(!isValidEmail(e.target.value));
    },
    [],
  );

  const sendCode = () => {
    if (invalidEmail) {
      alert('Invalid email!');
      return;
    }
    return contextValue?.incStep();
  };

  return (
    <Frame
      title="вход в личный кабинет"
      onBack={contextValue?.decStep}
      onClose={onClose}
    >
      <Text>введите адрес эл.почты</Text>
      <Input
        placeholder="reup@reup.ru"
        type="email"
        invalid={invalidEmail}
        errorMessage="неверный адрес эл. почты"
        onChange={onChangeEmail}
      />
      <button onClick={sendCode}>отправить код</button>
      <Text>
        еще не зарегистрированы?{' '}
        <A href={EPagesRoutes.Registration}>регистрация</A>
      </Text>
    </Frame>
  );
};

export default EmailStep;
