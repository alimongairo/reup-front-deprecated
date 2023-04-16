import React from 'react';
import Button from '@/components/common/Button';
import cx from './index.module.scss';
import { EDeliveryType, EPaymentType } from '@/store/user/type';

interface IProps {
  swithedTypes: Array<EPaymentType | EDeliveryType>;
  selectedType: EPaymentType | EDeliveryType;
  buttonInnerText: string[];
  switcherFunc: (type: EPaymentType | EDeliveryType) => void;
}

const TypesSwitcher = ({
  swithedTypes,
  selectedType,
  buttonInnerText,
  switcherFunc,
}: IProps) => {
  return (
    <div className={cx.wrapper}>
      {swithedTypes.map((type, index) => {
        return (
          <Button
            onClick={() => switcherFunc(type)}
            // isSelected={selectedType === type}
            key={type + index}
          >
            {buttonInnerText[index]}
          </Button>
        );
      })}
    </div>
  );
};

export default React.memo(TypesSwitcher);
