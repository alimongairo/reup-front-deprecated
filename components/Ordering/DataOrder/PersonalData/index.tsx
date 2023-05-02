import { useRef } from 'react';
import { IPropsOrderLogined } from '../..';
import { TOrderData } from '../../context';
import Checkbox from '@/components/common/Checkbox';
import Heading from '@/components/common/Heading';
import Input from '@/components/common/Input';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import cx from './index.module.scss';

interface IPropsOrder {
  onChange?: (data: TOrderData) => void;
}

const PersonalData = ({ onChange }: IPropsOrder) => {
  const formDataObject: any = {};

  const formRef = useRef<any>();

  const onChangeForm = (e: any) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      for (const [q, value] of formData) {
        formDataObject[q] = value;
        console.log(formDataObject);
      }
      console.log(formDataObject);
    }
  };

  return (
    <div className={cx.wrapperPersonalData}>
      <form ref={formRef} onChange={onChangeForm} id="form">
        <Heading tag="h2">2. данные получателя</Heading>
        <div className={cx.inputPersonalData}>
          <Heading tag="h4">как вас зовут?</Heading>
          <Input type="text" name="lastName" placeholder="фамилия*" />
          <Input type="text" name="firstName" placeholder="имя*" />
          <Input type="text" name="patronymic" placeholder="отчество" />

          <Heading className={cx.contact} tag="h4">
            контактные данные
          </Heading>

          <Input type="email" name="mail" placeholder="электронная почта*" />
          <Input type="tel" name="numberTel" placeholder="номер телефона*" />
          <Heading className={cx.contact} tag="h4">
            *-поля обязательные для заполнения
          </Heading>
        </div>

        <div className={cx.checkbox}>
          <div className={cx.checkboxMain}>
            <div>
              <Checkbox label="" labelPlacement="right" id={'checkAll'} />
            </div>
            <label htmlFor="checkAll">
              <Text size="thin">
                я ознакомился и согласен с{' '}
                <span>политикой обработки персональных данных</span> и
                пользовательским соглашением
              </Text>
            </label>
          </div>
          <div className={cx.checkboxMainTwo}>
            <div>
              <Checkbox label="" labelPlacement="right" id={'checkTwo'} />
            </div>
            <label htmlFor="checkTwo">
              <Text size="thin">
                я согласен получать новости об акциях и специальных предложениях
              </Text>
            </label>
          </div>
        </div>

        <div className={cx.btnClickSubmitForm}>
          <Button type="submit">Оформить заказ</Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
