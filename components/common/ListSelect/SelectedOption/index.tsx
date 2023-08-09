import { useCallback, useMemo } from 'react';
import cx from './index.module.scss';
import classNames from 'classnames';

import Image from 'next/image';

import deleteIconActive from '@/static/icons/closeWhite.svg';
import { ISelectOption } from '../../Select';

interface Props {
  option: ISelectOption | undefined;
  active: boolean;
  disabled: boolean;
}

const SelectedOption = ({ option, active, disabled }: Props) => {
  if (option) {
    return (
      <div
        className={classNames(
          cx.option,
          active ? cx.active : '',
          disabled ? cx.disabled : '',
        )}
      >
        {option.label}
        {active && <Image src={deleteIconActive} alt="delete" />}
      </div>
    );
  }
  return null;
};

export default SelectedOption;
