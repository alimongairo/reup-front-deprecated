import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import cx from './index.module.scss';

interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
}

const Heading = ({ children, tag = 'h1', className, ...props }: IProps) => {
  const classes = classNames(cx.heading, cx[tag], className);

  switch (tag) {
    case 'h1':
      return (
        <h1 className={classes} {...props}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={classes} {...props}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={classes} {...props}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={classes} {...props}>
          {children}
        </h4>
      );
  }
};

export default Heading;
