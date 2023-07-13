import { ReactNode, useEffect } from 'react';
// import classNames from 'classnames';
import Portal from '@/hoc/Portal';

import Heading from '@/components/common/Heading';

import cx from './index.module.scss';

interface IProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const FullscreenModal = ({ visible, onClose, children, title }: IProps) => {
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
      <div className={cx.modal}>
        <div className={cx.wrapper}>
          {/* TODO: стрелочка (поискать по сайту) */}
          <div className={cx.head}>
            <span className={cx.closeBtn} onClick={onClose}>
              cross
            </span>
            <Heading className={cx.title} tag="h3">
              фильтры
            </Heading>
          </div>
          <div className={cx.content}>{children}</div>
        </div>
      </div>
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
