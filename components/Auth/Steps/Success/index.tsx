import { useContext } from 'react';
import Link from 'next/link';

import Frame from '@/components/common/Frame';
import { AuthContext } from '@/components/Auth';
import { EPagesRoutes } from '@/constants/router';

import cx from './index.module.scss';

const Success = () => {
  const contextValue = useContext(AuthContext);

  return (
    <Frame title="вы успешно вошли!" onBack={contextValue?.decStep}>
      <Link href={EPagesRoutes.Main}>
        <button className={cx.mTop}>к покупкам</button>
      </Link>
    </Frame>
  );
};

export default Success;
