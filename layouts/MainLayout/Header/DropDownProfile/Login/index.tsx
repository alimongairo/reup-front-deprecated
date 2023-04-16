import { useState } from 'react';

import Text from '@/components/common/Text';
import AuthComponent from '@/components/Auth';

const LoginItem = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Text size="thin" onClick={() => setVisible(true)}>
        Войти
      </Text>
      <AuthComponent visible={visible} setVisible={setVisible} />
    </>
  );
};

export default LoginItem;
