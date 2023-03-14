import React, { useCallback, useContext, useState } from 'react';

import Frame from '@/components/common/Frame';
import Input from '@/components/common/Input';
import Text from '@/components/common/Text';
import { AuthContext } from '@/components/Auth/context';
import Button from '@/components/common/Button';

import cx from './index.module.scss';

import { isValidEmail } from '@/helpers/utils';
import { Checkbox } from 'antd';

const NameFields = () => {
  const contextValue = useContext(AuthContext);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInvalidEmail(!isValidEmail(e.target.value));
    },
    [],
  );

  const onClose = () => {
    contextValue?.onClose();
  };

  return (
    <Frame title="регистрация" onClose={onClose} width={'360px'}>
      <div className={cx.wrapper}>
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
        <div className={cx.personal}>
          <Checkbox />
          <Text size="thin">
            я ознакомился и согласен с политикой обработки персональных данных и
            пользовательским соглашением
          </Text>
        </div>
        <div className={cx.footer}>
          <Text size="thin">мы отправим вам код на эл. почту</Text>
          <div>
            <Button onClick={contextValue?.incStep}>отправить код</Button>
          </div>
          <Text size="thin">уже зарегистрированы?</Text>
          <Text className={cx.login} size="big" onClick={contextValue?.toAuth}>
            войти
          </Text>
        </div>
      </div>
    </Frame>
  );
};

export default NameFields;
