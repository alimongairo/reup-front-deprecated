import { memo } from 'react';
import Image from 'next/image';

import Button from '@/components/common/Button';
import TypesSwitcher from '@/components/Order/OrderItems/TypesSwitcher';
import FormCard from '@/components/Order/OrderItems/FormCard';

import { EPaymentType } from '@/store/user/type';
import tinkoffIcon from '@/static/img/tinkoffIcon.png';

import cx from './index.module.scss';

interface IProps {
  selectedPayment: EPaymentType;
  paymentSwither: (type: any) => void;
}

const btnLabel = ['наличными при получении', 'банковской картой'];

const PaymentForm = ({ selectedPayment, paymentSwither }: IProps) => {
  return (
    <FormCard header="способ оплаты">
      <TypesSwitcher
        swithedTypes={[EPaymentType.Cash, EPaymentType.CreditCard]}
        selectedType={selectedPayment}
        buttonInnerText={btnLabel}
        switcherFunc={paymentSwither}
      />

      {selectedPayment === EPaymentType.CreditCard && (
        <>
          <div className={cx.currentCard}>
            <Image src={tinkoffIcon} alt="tinkoff icon" />
            <div className={cx.title}>Tinkoff *9499</div>
          </div>

          <div>
            <Button small>
              добавить карту <sup>+</sup>
            </Button>
          </div>
        </>
      )}
    </FormCard>
  );
};

export default memo(PaymentForm);
