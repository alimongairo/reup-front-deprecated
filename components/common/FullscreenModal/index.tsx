import { ReactNode, useEffect } from 'react';
// import classNames from 'classnames';
import Portal from '@/hoc/Portal';

import cx from './index.module.scss';

interface IProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const FullscreenModal = ({ visible, onClose, children }: IProps) => {
  // onCLose как-будто бы не нужен, потому что он вешается на клик вне попапа
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'auto';
  }, [visible]);

  return (
    // Portal отрисовывает попап в другой части доп дерева (div id="portal" />), чтобы сократить кол-во перерисовок
    <Portal visible={visible}>
      <div>{children}</div>
      {/* <div className={cx.backModal}>
        <div className={classNames(cx.wrapper)}>
          <span className={cx.closeBtn} onClick={onClose}>
            <Image src={close} alt={'close'} />
          </span>
          <div className={cx.content}>{children}</div>
        </div>
        <span className={cx.closeMask} onClick={onClose}></span>
      </div> */}
    </Portal>
  );
};

export default FullscreenModal;
