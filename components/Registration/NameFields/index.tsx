import React, { useCallback, useContext, useState } from 'react';
import { useRouter } from 'next/router';

import Frame from '@/components/common/Frame';
import Input from '@/components/common/Input';
import Text from '@/components/common/Text';
import A from '@/components/common/A';
import { RegistrationContext } from '@/components/Registration/context';

import { EPagesRoutes } from '@/constants/router';
import { isValidEmail } from '@/helpers/utils';

const NameFields = () => {
  const contextValue = useContext(RegistrationContext);
  const router = useRouter();
  const [invalidEmail, setInvalidEmail] = useState(false);

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInvalidEmail(!isValidEmail(e.target.value));
    },
    [],
  );

  const onClose = () => {
    router.push(EPagesRoutes.Main);
  };

  return (
    <Frame title="регистрация" onBack={contextValue?.decStep} onClose={onClose}>
      <Input placeholder="фамилия" label="фамилия" />
      <Input placeholder="имя" label="имя" />
      <Input
        placeholder="reup@reup.ru"
        type="email"
        label="элекронная почта"
        invalid={invalidEmail}
        errorMessage="неверный адрес эл. почты"
        onChange={onChangeEmail}
      />
      <Text>мы отправим вам код на эл. почту</Text>
      <button onClick={contextValue?.incStep}>отправить код</button>
      <Text>
        уже зарегистрированы? <A href={EPagesRoutes.Auth}>войти</A>
      </Text>
    </Frame>
  );
};

export default NameFields;
