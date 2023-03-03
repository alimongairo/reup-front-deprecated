import { ReactNode } from 'react';
import classNames from 'classnames';

interface IProps {
  children: ReactNode;
  visible: boolean;
  onClose: () => void;
}

import cx from './index.module.scss';

const AuthModal = ({ children, visible, onClose }: IProps) => {
  return (
    <div className={cx.wrapper}>
      <div className={classNames(cx.modal, { [cx.visible]: visible })}>
        {children}
      </div>
      <span
        className={classNames({ [cx.visible]: visible }, cx.mask)}
        onClick={onClose}
      ></span>
    </div>
  );
};

export default AuthModal;
