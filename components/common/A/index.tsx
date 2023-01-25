import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import cx from './index.module.scss';

interface IProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

const A = ({ children, className, href, onClick, ...props }: IProps) => {
  const router = useRouter();
  const onClickA = () => {
    if (href) {
      router.push(href);
    }
    if (onClick) {
      return onClick;
    }
  };
  return (
    <span className={cx.wrapper}>
      <a {...props} onClick={onClickA} className={classNames(className, cx.a)}>
        {children}
      </a>
    </span>
  );
};

export default A;
