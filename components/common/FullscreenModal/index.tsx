import { ReactNode, useEffect } from 'react';
import Image from 'next/image';
// import classNames from 'classnames';
import Portal from '@/hoc/Portal';

import back from '@/static/icons/back.svg';
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
    // когда открыта такая модалка, показываем внизу футер для мобилки (она есть)
    <Portal visible={visible}>
      <div className={cx.modal}>
        <div className={cx.wrapper}>
          <div className={cx.head}>
            <Image
              src={back}
              alt={'back'}
              className={cx.closeBtn}
              onClick={onClose}
            />
            <Heading className={cx.title} tag="h3">
              фильтры
            </Heading>
          </div>
          <div className={cx.content}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default FullscreenModal;
