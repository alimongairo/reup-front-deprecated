import { useMemo, useState } from 'react';
import { IDropDownItem } from '@/components/common/DropDown';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import DropDownSdek from './DropDownSdek';
import cx from './index.module.scss';

const AddressDelivery = () => {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible((state) => !state);
  };

  const mockDelivery = {
    id: 1,
    delivery: 1,
    title: 'Блузка женская “Лэйди”',
  };

  const overlay: IDropDownItem[] = useMemo(() => {
    return [
      {
        id: 0,
        label: (
          <div className={cx.ddItem}>
            <Text size="thin">Сдэк на площади Минина</Text>
          </div>
        ),
      },
      {
        id: 1,
        label: (
          <div className={cx.ddItem}>
            <Text size="thin">Сдэк на автозаводе</Text>
          </div>
        ),
      },
      {
        id: 2,
        label: (
          <div className={cx.ddItem}>
            <Text size="thin">Сдэк в печерах</Text>
          </div>
        ),
      },
    ];
  }, [visible]);

  return (
    <div className={cx.wrapperAddressDelivery}>
      <Heading tag="h2">1. адрес и доставка</Heading>
      <div className={cx.addressDeliveryDropDown}>
        <Heading tag="h4">выбрать пункт выдачи</Heading>

        <DropDownSdek
          title={
            <div className={cx.ddTitle}>
              <Text size="thin">пункт выдачи</Text>
            </div>
          }
          visible={visible}
          setVisible={onClick}
          overlay={overlay}
        />
      </div>
    </div>
  );
};

export default AddressDelivery;
