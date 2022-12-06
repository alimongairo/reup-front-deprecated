import { Form, Input } from 'antd';
import FormCard from '@/components/Order/OrderItems/FormCard';
import { EDeliveryType } from '@/store/user/type';
import cx from './index.module.scss';

interface IProps {
  selectedDelivery: EDeliveryType;
}

const ContactInfoForm = ({ selectedDelivery }: IProps) => {
  return (
    <FormCard header="контактные данные">
      <Form.Item
        name="surname"
        rules={[{ required: true, message: 'Укажите фамилию' }]}
      >
        <Input placeholder="фамилия" size="large" />
      </Form.Item>

      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Укажите имя' }]}
      >
        <Input placeholder="имя" size="large" />
      </Form.Item>

      <Form.Item
        name="patronymic"
        rules={
          selectedDelivery === EDeliveryType.Post
            ? [{ required: true, message: 'Укажите отчество' }]
            : []
        }
        extra={
          <div className={cx.subPlaceholder}>
            *обязательно при доставке почтой
          </div>
        }
      >
        <Input placeholder="отчество*" size="large" />
      </Form.Item>

      <Form.Item
        name="phone"
        valuePropName="value"
        rules={[
          {
            required: true,
            message: 'Укажите номер телефона',
          },
        ]}
      >
        <Input
          type="text"
          placeholder="номер телефона"
          size="large"
          maxLength={19}
        />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'Укажите корректный e-mail',
          },
        ]}
        extra={
          <div className={cx.subPlaceholder}>*необходим для отправки чека</div>
        }
      >
        <Input placeholder="e-mail*" size="large" />
      </Form.Item>
    </FormCard>
  );
};

export default ContactInfoForm;
