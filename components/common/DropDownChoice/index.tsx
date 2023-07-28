import { ReactNode } from 'react';
import classNames from 'classnames';
import leftArrow from 'static/icons/leftArrow.svg';
import cx from './index.module.scss';
import Image from 'next/image';

export interface IDropDownItem {
  label: string | number | ReactNode;
  id: string | number;
}

interface IProps {
  visible: boolean;
  setVisible: () => void;
  overlay: IDropDownItem[];
  title: ReactNode;
}

const DropDownChoice = ({
  visible = false,
  overlay,
  title,
  setVisible,
}: IProps) => {
  return (
    <>
      <div onClick={setVisible} className={cx.wrapper}>
        <div>
          <div>{title}</div>{' '}
          <div className={cx.collapseIcon}>
            <Image
              src={leftArrow}
              alt={'leftArrow'}
              className={classNames(
                cx.icon,
                { [cx.rotate__revert]: !visible },
                { [cx.rotate]: visible },
              )}
            />
          </div>
        </div>

        <div className={classNames({ [cx.visible]: visible }, cx.menu)}>
          {overlay.map((item) => (
            <div key={item.id} className={cx.menuItem}>
              {item.label}
            </div>
          ))}
        </div>
      </div>
      {visible && <span onClick={setVisible} className={cx.mask}></span>}
    </>
  );
};

export default DropDownChoice;
