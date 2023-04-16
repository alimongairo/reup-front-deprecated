import Text from '@/components/common/Text';
import Minus from '@/static/icons/minuse.svg';
import Plus from '@/static/icons/plus.svg';
import Image from 'next/image';
import { useContext, useState } from 'react';
import cx from './index.module.scss';
import { FilterContext } from '..';

const FilterSeason = () => {
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
        <Text size="normal">сезон</Text>
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
        <div className={cx.len}>
          <input
            type="checkbox"
            className={cx.custom_checkbox}
            onChange={(e) => checkboxToggle('hlopok')}
            id="leto"
            name="leto"
            checked={checkedHlopok}
          />
          <label htmlFor="leto">лето</label>
        </div>

        <div className={cx.klen}>
          <input
            type="checkbox"
            className={cx.custom_checkbox}
            onChange={(e) => checkboxToggle('hlopok')}
            id="zima"
            name="zima"
            checked={checkedHlopok}
          />
          <label htmlFor="zima">зима</label>
        </div>
      </div>
    </div>
  );
};
export default FilterSeason;
