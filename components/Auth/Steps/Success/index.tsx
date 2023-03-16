import { useContext } from 'react';

import { AuthContext } from '@/components/Auth/context';
import Button from '@/components/common/Button';
import Frame from '@/components/common/Frame';

import cx from './index.module.scss';

const Success = () => {
  const contextValue = useContext(AuthContext);

  const goToMain = () => {
    contextValue?.onClose();
  };

  return (
    <Frame title="вы успешно вошли!" onClose={contextValue?.onClose}>
      <Button className={cx.btn} onClick={goToMain}>
        к покупкам
      </Button>
    </Frame>
  );
};

export default Success;
