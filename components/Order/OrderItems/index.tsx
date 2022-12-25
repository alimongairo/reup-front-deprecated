import { useCallback, useState } from 'react';
import classNames from 'classnames';
import { Form, notification } from 'antd';

import ContactInfoForm from '@/components/Order/OrderItems/ContactInfoForm';
import DeliveryForm from '@/components/Order/OrderItems/DelivetyForm';
import PaymentForm from '@/components/Order/OrderItems/PaymentForm';

import { EDeliveryType, EPaymentType, TUserStore } from '@/store/user/type';
import { TBasketStore } from '@/store/basket/type';

import cx from './index.module.scss';

interface IProps {
  user: TUserStore['dataSource'];
  basket: TBasketStore['dataSource'];
}

const OrderForm = ({ user, basket }: IProps) => {
  const [form] = Form.useForm();

  const [selectedDelivery, setSelectedDelivery] = useState(EDeliveryType.Post);
  const [selectedPayment, setSelectedPayment] = useState(
    EPaymentType.CreditCard,
  );

  const setSelectedPaymentHandler = useCallback((paymentType: EPaymentType) => {
    setSelectedPayment(paymentType);
  }, []);

  const switchDeliveryType = useCallback(
    async (deliveryType: EDeliveryType) => {
      setSelectedDelivery(deliveryType);
      await form.validateFields(['patronymic']);
    },
    [],
  );

  const submitForm = async (values: any) => {
    notification.info({
      message: 'Успешно',
      description: (
        <div>
          {Object.entries(values).map((value) => (
            <div key={value[0]}>{value[0] + ': ' + value[1]}</div>
          ))}
        </div>
      ),
    });
    console.log('Received values from form: ', values);
  };

  const onFinishFailed = () => {
    notification.error({ message: 'Некоторые поля заполнены некорректно' });
    form.scrollToField('surname');
  };

  return (
    <Form
      form={form}
      name="orderForm"
      initialValues={{ phone: '+ 7 (___) ___-__-__' }}
      onFinish={submitForm}
      onFinishFailed={onFinishFailed}
    >
      <div className={cx.wrapper}>
        <div className={cx.firstRow}>Оформление заказа</div>

        {!user && <ContactInfoForm selectedDelivery={selectedDelivery} />}

        <DeliveryForm
          selectedDelivery={selectedDelivery}
          user={user}
          deliverySwither={switchDeliveryType}
        />

        <PaymentForm
          selectedPayment={selectedPayment}
          paymentSwither={setSelectedPaymentHandler}
        />

        <button
          className={classNames(
            cx.submitButton,
            basket && basket.length && cx.active,
          )}
          type="submit"
          disabled={!basket || !basket.length}
        >
          оформить заказ
        </button>
      </div>
    </Form>
  );
};

export default OrderForm;
