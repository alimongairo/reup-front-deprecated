import { useState } from 'react';

import Text from '@/components/common/Text';
import Modal from '@/components/Auth/Modal';
import AuthComponent from '@/components/Auth';

const LoginItem = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Text size="thin">Войти</Text>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <AuthComponent />
      </Modal>
    </>
  );
};

export default LoginItem;
