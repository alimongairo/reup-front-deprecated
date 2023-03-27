import Checkbox from '@/components/common/Checkbox';
import Collapse from '@/components/common/Collapse';
import Text from '@/components/common/Text';
import Minus from '@/static/icons/minuse.svg';
import Plus from '@/static/icons/plus.svg';
import Image from 'next/image';
import { useState } from 'react';
import cx from './index.module.scss';

const FilterStructure = () => {
  const [listActive, setListActive] = useState(false);

  const onClickListActive = () => {
    setListActive(!listActive);
  };

  return (
    <div className={cx.wrapper_pattern}>
      <div className={cx.header_pattern}>
        <Collapse
          title="состав"
          content={
            <div>
              <div className={cx.len}>
                <input
                  type="checkbox"
                  className={cx.custom_checkbox}
                  id="len"
                  name="len"
                  value="yes"
                />
                <label htmlFor="len">хлопок</label>
              </div>

              <div className={cx.klen}>
                <input
                  type="checkbox"
                  className={cx.custom_checkbox}
                  id="klen"
                  name="klen"
                  value="yes"
                />
                <label htmlFor="klen">синтетика</label>
              </div>
            </div>
          }
        />
      </div>

      {/* <div className={listActive ? cx.list_pattern : cx.list_pattern_dis}>
        <div className={cx.len}>
          <input
            type="checkbox"
            className={cx.custom_checkbox}
            id="len"
            name="len"
            value="yes"
          />
          <label htmlFor="len">хлопок</label>
        </div>

        <div className={cx.klen}>
          <input
            type="checkbox"
            className={cx.custom_checkbox}
            id="klen"
            name="klen"
            value="yes"
          />
          <label htmlFor="klen">синтетика</label>
        </div>
      </div> */}
    </div>
  );
};
export default FilterStructure;
