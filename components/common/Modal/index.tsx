import React, { ReactNode, useEffect } from 'react';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import cx from './index.module.scss';
import close from '@/static/icons/close.svg';

interface IProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isVisible, children, onClose }: IProps) => {
  const root = document.getElementById('__next');

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isVisible]);

  if (root && isVisible) {
    return ReactDOM.createPortal(
      <div className={cx.wrapper}>
        <div className={classNames({ [cx.visible]: isVisible }, cx.modal)}>
          <div className={cx.header}>
            <div className={cx.closeBtn} onClick={onClose}>
              <Image src={close} alt="close" />
            </div>
          </div>
          <div className={cx.content}>{children}</div>
        </div>
      </div>,
      root,
    );
  }

  return null;
};

export default React.memo(Modal);
