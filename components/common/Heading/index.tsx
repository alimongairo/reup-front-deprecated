import { ReactNode } from 'react';
import classNames from 'classnames';

import cx from './index.module.scss';

type TProps = {
  children: ReactNode;
  size?: 'big' | 'medium' | 'small';
};

const Heading = ({ children, size = 'big' }: TProps) => {
  return <h1 className={classNames(cx.heading, cx[size])}>{children}</h1>;
};

export default Heading;
