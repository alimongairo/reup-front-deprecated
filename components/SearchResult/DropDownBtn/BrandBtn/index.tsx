import { useMemo, useState } from 'react';

import { IDropDownItem } from '@/components/common/DropDown';
import Text from '@/components/common/Text';

import { DownOutlined } from '@ant-design/icons';
import DropDownSearch from '../DropDownSearch';
import cx from './index.module.scss';

const BrandBtn = () => {
  const [visible, setVisible] = useState(false);
  const [brand, setBrand] = useState(false);
  const [spanActive, setSpanActive] = useState(false);

  const onClick = () => {
    setVisible((state) => !state);
    setSpanActive(!spanActive);
  };

  const clickBrand = () => {
    setBrand(true);
  };

  const overlay: IDropDownItem[] = useMemo(() => {
    return [
      {
        id: 0,
        label: (
          <div onClick={clickBrand} className={cx.ddItem}>
            <Text size="thin">Adidas</Text>
          </div>
        ),
      },
      {
        id: 1,
        label: (
          <div onClick={clickBrand} className={cx.ddItem}>
            <Text size="thin">Puma</Text>
          </div>
        ),
      },
      {
        id: 2,
        label: (
          <div onClick={clickBrand} className={cx.ddItem}>
            <Text size="thin">Nike</Text>
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
          <Text>Брэнд</Text>
          <DownOutlined className={spanActive ? cx.ddTitleSpanActive : ''} />
        </div>
      }
    />
  );
};

export default BrandBtn;
