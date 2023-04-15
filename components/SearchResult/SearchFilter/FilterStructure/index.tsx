import Input from '@/components/common/Input';
import Text from '@/components/common/Text';
import Minus from '@/static/icons/minuse.svg';
import Plus from '@/static/icons/plus.svg';
import Image from 'next/image';
import { useContext, useMemo, useState } from 'react';
import { FilterContext } from '..';
import cx from './index.module.scss';

const FilterStructure = () => {
  const { setFormData } = useContext(FilterContext);
  const [checkedHlopok, setCheckedHlopok] = useState(false);
  const [listActive, setListActive] = useState(false);

  const onClickListActive = () => {
    setListActive(!listActive);
  };

  const clickInput = (e: any) => {
    if (e.target.name === 'hlopok') {
      setCheckedHlopok((state) => !state);
    }
    setFormData((state: any) => {
      return { ...state, [e.target.name]: e.target.checked ?? e.target.value };
    });
  };

  const checkboxToggle = (name: string) => {
    if (name === 'hlopok') {
      setCheckedHlopok((state) => !state);
    }
  };

  return (
    <div className={cx.wrapper_pattern}>
      <div className={cx.header_pattern}>
        <Text size="normal">состав</Text>
        {listActive ? (
          <Image
            className={cx.minus}
            onClick={onClickListActive}
            src={Minus}
            alt="Minus"
          />
        ) : (
          <Image onClick={onClickListActive} src={Plus} alt="Plus" />
        )}
      </div>

      <div className={listActive ? cx.list_pattern : cx.list_pattern_dis}>
        <div className={cx.hlopok}>
          <input
            type="checkbox"
            onChange={(e) => checkboxToggle('hlopok')}
            className={cx.custom_checkbox}
            id="hlopok"
            name="hlopok"
            checked={checkedHlopok}
          />
          <label htmlFor="hlopok">хлопок</label>
        </div>

        <div className={cx.sintetika}>
          <input
            type="checkbox"
            onChange={(e) => clickInput(e)}
            className={cx.custom_checkbox}
            id="sintetika"
            name="sintetika"
          />
          <label htmlFor="sintetika">синтетика</label>
        </div>
      </div>
    </div>
  );
};
export default FilterStructure;
