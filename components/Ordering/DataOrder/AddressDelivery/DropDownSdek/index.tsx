import { ReactNode } from 'react';
import classNames from 'classnames';
import iconsDrop from 'static/icons/downArrow.svg';

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

const DropDownSdek = ({
  visible = false,
  overlay,
  title,
  setVisible,
}: IProps) => {
  return (
    <>
      <div onClick={setVisible} className={cx.wrapper}>
        {title}
        <div className={classNames({ [cx.visible]: visible }, cx.menu)}>
          {overlay.map((item) => (
            <div key={item.id} className={cx.menuItem}>
              {item.label}
            </div>
          ))}
        </div>
        <div className={classNames(visible ? cx.imageActive : cx.image)}>
          <Image src={iconsDrop} alt={'DropDown'} />
        </div>
      </div>
      {visible && <span onClick={setVisible} className={cx.mask}></span>}
    </>
  );
};

export default DropDownSdek;
