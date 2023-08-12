import { useCallback, useMemo, useState } from 'react';
import deleteIcon from '@/static/icons/close.svg';
import addIcon from '@/static/icons/addWhite.svg';
import cx from './index.module.scss';
import classNames from 'classnames';

import Select from '../../../common/Select';
import Image from 'next/image';
import Button from '../../../common/Button';

interface Props {
  value: string[];
  onChange: any;
  sizes: string[];
}

const SizeSelectSingle = ({ sizes, value, onChange }: Props) => {
  const options = sizes.map((el) => ({ label: el, value: el }));

  const handleChange = useCallback(
    (index: number) => (val: string) => {
      const newVal = [...value];
      newVal[index] = val;
      onChange(newVal);
    },
    [onChange, value],
  );

  const handleAdd = useCallback(() => {
    const newVal = [...value];
    newVal.push('');
    onChange(newVal);
  }, [onChange, value]);

  const handleDelete = useCallback(
    (index: number) => {
      const newVal = [...value];
      newVal.splice(index, 1);
      onChange(newVal);
    },
    [onChange, value],
  );

  return (
    <div className={cx.container}>
      {value.map((el, i) => {
        return (
          <div key={i} className={cx.sizeBlock}>
            <div className={cx.iconBox}>
              <Image
                src={deleteIcon}
                alt="delete"
                className={classNames(cx.icon, i === 0 ? cx.hide : '')}
                onClick={() => handleDelete(i)}
              />
            </div>
            <div className={cx.select}>
              <Select
                options={options}
                value={el}
                onChange={handleChange(i)}
                label="размер"
              />
            </div>
          </div>
        );
      })}
      <div>
        <Button className={cx.button} onClick={handleAdd}>
          <Image alt="add" src={addIcon} />
        </Button>
      </div>
    </div>
  );
};

export default SizeSelectSingle;
