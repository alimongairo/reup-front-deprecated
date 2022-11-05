import { FC, ReactNode } from 'react';

import cx from './index.module.scss';

interface IProps {
  children: ReactNode;
}

const LoginLayout: FC<IProps> = ({ children }) => {
  return <div className={cx.wrapper}>{children}</div>;
};

export default LoginLayout;
