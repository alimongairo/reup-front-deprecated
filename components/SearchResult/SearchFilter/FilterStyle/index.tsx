import Text from '@/components/common/Text';
import Minus from '@/static/icons/Minuse.svg';
import Plus from '@/static/icons/plus.svg';
import Image from 'next/image';
import { useState } from 'react';
import cx from './index.module.scss';

const FilterSeason = () => {
  const [listActive, setListActive] = useState(false);

  const onClickListActive = () => {
    setListActive(!listActive);
  };

  return (
    <div className={cx.wrapper_pattern}>
      <div className={cx.header_pattern}>
        <Text>стиль</Text>
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
            id="len"
            name="len"
            value="yes"
          />
          <label htmlFor="len">молодёжный</label>
        </div>

        <div className={cx.klen}>
          <input
            type="checkbox"
            className={cx.custom_checkbox}
            id="klen"
            name="klen"
            value="yes"
          />
          <label htmlFor="klen">старческий</label>
        </div>
      </div>
    </div>
  );
};
export default FilterSeason;
