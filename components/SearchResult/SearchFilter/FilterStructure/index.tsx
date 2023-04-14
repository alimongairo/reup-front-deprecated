import { memo, useContext, useState } from 'react';
import Text from '@/components/common/Text';
import Minus from '@/static/icons/minuse.svg';
import Plus from '@/static/icons/plus.svg';
import Image from 'next/image';
import cx from './index.module.scss';
import Input from '@/components/common/Input';
import { FilterContext } from '..';

const FilterStructure = () => {
  const { setFormData } = useContext(FilterContext);
  const [checked, setChecked] = useState(false);
  const [listActive, setListActive] = useState(false);

  const structure = {
    hlopok: false,
    sintetika: false,
  };

  const onClickListActive = () => {
    setListActive(!listActive);
  };

  const clickInput = (e: any) => {
    setChecked(!checked);
    const target = e.target.name;
    if (target == 'hlopok') {
      structure.hlopok = checked;
    }
    if (target == 'sintetika') {
      structure.sintetika = checked;
    }
    setFormData((state: any) => {
      return { ...state, structure };
    });
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
          <Input
            type="checkbox"
            onClick={(e) => clickInput(e)}
            className={cx.custom_checkbox}
            id="hlopok"
            name="hlopok"
          />
          <label htmlFor="hlopok">хлопок</label>
        </div>

        <div className={cx.sintetika}>
          <Input
            type="checkbox"
            onClick={(e) => clickInput(e)}
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
export default memo(FilterStructure);
