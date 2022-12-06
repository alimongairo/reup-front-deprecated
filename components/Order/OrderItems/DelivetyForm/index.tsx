import { memo } from 'react';
import FormCard from '@/components/Order/OrderItems/FormCard';
import TypesSwitcher from '@/components/Order/OrderItems/TypesSwitcher';
import Checkboxes from '@/components/Order/OrderItems/DelivetyForm/Checkboxes';
import DeliveryInfoForm from '@/components/Order/OrderItems/DelivetyForm/DeliveryInfoForm';
import UserDeliveryInfo from '@/components/Order/OrderItems/DelivetyForm/UserDeliveryInfo';

import { EDeliveryType, TUserItem } from '@/store/user/type';

import cx from './index.module.scss';

interface IProps {
  selectedDelivery: EDeliveryType;
  user: TUserItem | null;
  deliverySwither: (...args: any[]) => any;
}

const DeliveryForm = ({ selectedDelivery, user, deliverySwither }: IProps) => {
  return (
    <FormCard header="способ доставки">
      <TypesSwitcher
        swithedTypes={[EDeliveryType.Post, EDeliveryType.InPoint]}
        selectedType={selectedDelivery}
        buttonInnerText={['доставка', 'пункты выдачи']}
        switcherFunc={deliverySwither}
      />

      {!user && selectedDelivery === EDeliveryType.Post && <DeliveryInfoForm />}

      {selectedDelivery === EDeliveryType.InPoint && (
        <div className={cx.deliveryMap}>
          <div>карта с пунктами выдачи</div>
        </div>
      )}

      {user && <UserDeliveryInfo user={user} />}

      {!user && <Checkboxes />}
    </FormCard>
  );
};

export default memo(DeliveryForm);
