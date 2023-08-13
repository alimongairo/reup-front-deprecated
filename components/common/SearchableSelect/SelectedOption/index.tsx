import { useCallback } from 'react';
import cx from './index.module.scss';

import Image from 'next/image';

import deleteIcon from '@/static/icons/closeWhite.svg';
import { ISelectOption } from '../../Select';

interface Props {
  option: ISelectOption | undefined;
  value: string | string[];
  onChange: any;
}

const SelectedOption = ({ option, value, onChange }: Props) => {
  const handleDelete = useCallback(() => {
    onChange(
      Array.isArray(value) ? value.filter((el) => el !== option?.value) : '',
    );
  }, [onChange, option?.value, value]);

  if (option) {
    return (
      <div className={cx.option}>
        {option.label}
        <Image src={deleteIcon} alt="delete" onClick={handleDelete} />
      </div>
    );
  }
  return null;
};

export default SelectedOption;
