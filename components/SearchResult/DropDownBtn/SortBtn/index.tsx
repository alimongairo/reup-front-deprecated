import { useMemo, useState } from 'react';

import { IDropDownItem } from '@/components/common/DropDown';
import Text from '@/components/common/Text';

import { DownOutlined } from '@ant-design/icons';
import DropDownSearch from '../DropDownSearch';
import cx from './index.module.scss';

const SortBtn = () => {
  const [visible, setVisible] = useState(false);
  const [spanActive, setSpanActive] = useState(false);

  const onClick = () => {
    setVisible((state) => !state);
    setSpanActive(!spanActive);
  };

  const overlay: IDropDownItem[] = useMemo(() => {
    return [
      {
        id: 0,
        label: (
          <div className={cx.ddItem}>
            <Text size="thin">По цене</Text>
          </div>
        ),
      },
      {
        id: 1,
        label: (
          <div className={cx.ddItem}>
            <Text size="thin">По рейтингу</Text>
          </div>
        ),
      },
      {
        id: 2,
        label: (
          <div className={cx.ddItem}>
            <Text size="thin">По дате</Text>
          </div>
        ),
      },
    ];
  }, [visible]);

  return (
    <DropDownSearch
      visible={visible}
      setVisible={onClick}
      overlay={overlay}
      title={
        <div className={cx.ddTitle}>
          <Text>Сортировать</Text>
          <DownOutlined className={spanActive ? cx.ddTitleSpanActive : ''} />
        </div>
      }
    />
  );
};

export default SortBtn;
