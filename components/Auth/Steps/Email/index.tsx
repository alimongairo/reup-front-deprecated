import React, { useCallback, useContext, useState } from 'react';
import { useRouter } from 'next/router';

import Text from '@/components/common/Text';
import Input from '@/components/common/Input';
import A from '@/components/common/A';
import { AuthContext } from '@/components/Auth/context';

import { EPagesRoutes } from '@/constants/router';
import { isValidEmail } from '@/helpers/utils';

import styles from './index.module.scss';
import Button from '@/components/common/Button';
import Frame from '@/components/common/Frame';
import classNames from 'classnames';

const EmailStep = () => {
  const contextValue = useContext(AuthContext);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const onClose = () => {
    contextValue?.onClose();
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
    <Frame title="вход в личный кабинет" onClose={onClose}>
      <div className={styles.wrapper}>
        <div className={classNames(styles.flex, styles.header)}>
          <Input
            placeholder="reup@reup.ru"
            type="email"
            invalid={invalidEmail}
            errorMessage="неверный адрес эл. почты"
            onChange={onChangeEmail}
            label="введите адрес эл.почты"
          />
        </div>
        <Text size="thin">мы отправим вам код на эл. почту</Text>
        <div>
          <Button onClick={sendCode}>отправить код</Button>
        </div>
        <Text size="thin">еще не зарегистрированы?</Text>
        <Text onClick={contextValue?.toRegistration} className={styles.pointer}>
          зарегистрироваться
        </Text>
      </div>
    </Frame>
  );
};

export default EmailStep;
