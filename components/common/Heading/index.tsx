import { ReactNode } from 'react';
import classNames from 'classnames';

import cx from './index.module.scss';

type TProps = {
  children: ReactNode;
  className?: string[];
  size?: 'big' | 'medium' | 'small';
};

const Heading = ({ children, size = 'big', className }: TProps) => {
  return (
    <h1 className={classNames(cx.heading, cx[size], ...(className || []))}>
      {children}
    </h1>
  );
};

export default Heading;
