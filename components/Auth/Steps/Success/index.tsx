import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { AuthContext } from '@/components/Auth/context';

import { EPagesRoutes } from '@/constants/router';

import cx from './index.module.scss';

const Success = () => {
  const contextValue = useContext(AuthContext);
  const router = useRouter();

  const onClose = () => {
    router.push(EPagesRoutes.Main);
  };

  return (
    <div>
      <Link href={EPagesRoutes.Main}>
        <button className={cx.mTop}>к покупкам</button>
      </Link>
    </div>
  );
};

export default Success;
