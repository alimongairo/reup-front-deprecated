import Text from '@/components/common/Text';
import Minus from '@/static/icons/Minuse.svg';
import Plus from '@/static/icons/plus.svg';
import Image from 'next/image';
import { useState } from 'react';
import cx from './index.module.scss';

const FilterPattern = () => {
  const [listActive, setListActive] = useState(false);

  const onClickListActive = () => {
    setListActive(!listActive);
  };

  return (
    <div className={cx.wrapper_pattern}>
      <div className={cx.header_pattern}>
        <Text>узор</Text>
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
          <label htmlFor="len">лен</label>
        </div>

        <div className={cx.klen}>
          <input
            type="checkbox"
            className={cx.custom_checkbox}
            id="klen"
            name="klen"
            value="yes"
          />
          <label htmlFor="klen">клён</label>
        </div>

        <div className={cx.bulion}>
          <input
            type="checkbox"
            className={cx.custom_checkbox}
            id="bulion"
            name="bulion"
            value="yes"
          />
          <label htmlFor="bulion">бульон</label>
        </div>

        <div className={cx.medalion}>
          <input
            type="checkbox"
            className={cx.custom_checkbox}
            id="medalion"
            name="medalion"
            value="yes"
          />
          <label htmlFor="medalion">медальон</label>
        </div>

        <div className={cx.omlet}>
          <input
            type="checkbox"
            className={cx.custom_checkbox}
            id="omlet"
            name="omlet"
            value="yes"
          />
          <label htmlFor="omlet">омлет</label>
        </div>
      </div>
    </div>
  );
};
export default FilterPattern;
