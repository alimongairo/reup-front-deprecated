import { Form, Input } from 'antd';
import FormCard from '@/components/Order/OrderItems/FormCard';
import Text from '@/components/common/Text';
import { EDeliveryType } from '@/store/user/type';
import DropDownChoice, {
  IDropDownItem,
} from '@/components/common/DropDownChoice';
import cx from './index.module.scss';
import { useMemo, useState } from 'react';

interface IProps {
  selectedDelivery: EDeliveryType;
}

const ContactInfoForm = ({ selectedDelivery }: IProps) => {
  const [visible, setVisible] = useState(false);
  const [dropDownTitle, setDropDownTitle] = useState('пункт выдачи');
  const onClick = () => {
    setVisible((state) => !state);
  };
  const onChoiceDropdown = (text: string) => {
    setDropDownTitle(text);
  };

  const overlay: IDropDownItem[] = useMemo(() => {
    return [
      {
        id: 0,
        label: (
          <div
            onClick={() => onChoiceDropdown('1 пункт выдачи')}
            className={cx.ddItem}
          >
            <Text size="thin">1 пункт выдачи</Text>
          </div>
        ),
      },
      {
        id: 1,
        label: (
          <div
            onClick={() => onChoiceDropdown('2 пункт выдачи')}
            className={cx.ddItem}
          >
            <Text size="thin">2 пункт выдачи</Text>
          </div>
        ),
      },
      {
        id: 2,
        label: (
          <div
            onClick={() => onChoiceDropdown('3 пункт выдачи')}
            className={cx.ddItem}
          >
            <Text size="thin">3 пункт выдачи</Text>
          </div>
        ),
      },
    ];
  }, [visible]);

  return (
    <>
      <FormCard header="1. Адрес и доставка">
        <Form.Item
          name="surname"
          rules={[{ required: true, message: 'Укажите фамилию' }]}
        >
          {/* <Input placeholder="фамилия" size="large" /> */}
          <DropDownChoice
            visible={visible}
            setVisible={onClick}
            overlay={overlay}
            title={dropDownTitle}
          />
        </Form.Item>
      </FormCard>
      <FormCard header="2. Данные получателя">
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
            <div className={cx.subPlaceholder}>
              *необходим для отправки чека
            </div>
          }
        >
          <Input placeholder="e-mail*" size="large" />
        </Form.Item>
      </FormCard>
    </>
  );
};

export default ContactInfoForm;
