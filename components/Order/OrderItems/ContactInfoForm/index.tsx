import { Form } from 'antd';
import Input from '@/components/common/Input';
import A from '@/components/common/A';
import { CheckboxGroup, ICheckboxProps } from '@/components/common/Checkbox';
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
  onChangeCheckbox: (changedValue: any) => void;
}

const ContactInfoForm = ({ selectedDelivery, onChangeCheckbox }: IProps) => {
  const [visible, setVisible] = useState(false);
  const [dropDownTitle, setDropDownTitle] = useState('пункт выдачи');
  const onClick = () => {
    setVisible((state) => !state);
  };
  const onChoiceDropdown = (text: string) => {
    setDropDownTitle(text);
  };

  const checkboxList: ICheckboxProps[] = [
    {
      label: (
        <>
          я ознакомился и согласен{' '}
          <A href="#" className={cx.link}>
            с политикой обработки персональных данных
          </A>{' '}
          и пользовательским соглашением
        </>
      ),
      value: 'agreement1',
      id: 'agreement1',
      labelPlacement: 'right',
    },
    {
      label: 'я согласен получать новости об акциях и специальных предложениях',
      value: 'agreement2',
      id: 'agreement2',
      labelPlacement: 'right',
    },
  ];
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
          rules={[{ required: true, message: 'Укажите адрес доставки' }]}
        >
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
          <Input placeholder="фамилия*" label="как вас зовут?" />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Укажите имя' }]}
        >
          <Input placeholder="имя*" />
        </Form.Item>

        <Form.Item
          name="patronymic"
          rules={
            // selectedDelivery === EDeliveryType.Post
            //   ? [{ required: true, message: 'Укажите отчество' }]
            //   : []
            [{ required: true, message: 'Укажите отчество' }]
          }
        >
          <Input placeholder="отчество" className={cx.withOffset} />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'Укажите корректный e-mail',
            },
          ]}
        >
          <Input placeholder="электронная почта*" label="контактные данные" />
        </Form.Item>

        <Form.Item
          name="phone"
          // valuePropName="value"
          rules={[
            {
              required: true,
              message: 'Укажите номер телефона',
            },
          ]}
        >
          <Input
            type="number"
            placeholder="номер телефона*"
            maxLength={19}
            className={cx.withOffset}
          />
        </Form.Item>

        <div className={cx.withOffset}>*-поля обязательные для заполнения</div>

        <Form.Item>
          <CheckboxGroup
            // TODO:дизеблит ькнопку, если не выбраны - отдельный стейт
            checkboxList={checkboxList}
            groupName={'pattern'}
            direction={'vertical'}
            onChangeGroup={onChangeCheckbox}
          />
        </Form.Item>
      </FormCard>
    </>
  );
};

export default ContactInfoForm;
