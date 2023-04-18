import Heading from '@/components/common/Heading';
import cx from './index.module.scss';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';

const AddressDelivery = () => {
  return (
    <div className={cx.wrapperAddressDelivery}>
      <Heading tag="h2">1. адрес и доставка</Heading>
      <div className={cx.addressDeliveryDropDown}>
        <Heading tag="h4">выбрать пункт выдачи</Heading>
        <Button>DropDown</Button>
      </div>
    </div>
  );
};

export default AddressDelivery;
