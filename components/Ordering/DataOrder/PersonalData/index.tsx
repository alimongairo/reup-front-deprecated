import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { OrderContext, TOrderData } from '../../context';
import { EPagesRoutes } from '@/constants/router';
import Button from '@/components/common/Button';
import Checkbox from '@/components/common/Checkbox';
import Heading from '@/components/common/Heading';
import Input from '@/components/common/Input';
import Text from '@/components/common/Text';
import cx from './index.module.scss';
import PersonalDataPolicy from './PersonalDataPolicy';

interface IPropsOrder {
  onChange?: (data: TOrderData) => void;
}

const PersonalData = ({ onChange }: IPropsOrder) => {
  const router = useRouter();
  const formRef = useRef<any>();
  const [formData, setFormData] = useState<TOrderData>({});

  const onChangeForm = () => {
    if (formRef.current) {
      const data = new FormData(formRef.current);
      setFormData((state) => ({ ...state, ...Object.fromEntries([...data]) }));
    }
  };

  const setOrderData = (data: TOrderData) => {
    setFormData((state) => ({ ...state, ...data }));
  };

  const contextValue = useMemo(() => {
    return {
      ...formData,
      setOrderData,
    };
  }, [formData]);

  useEffect(() => {
    if (onChange) {
      onChange(formData);
    }
  }, [formData]);
  console.log(formData);

  const toCompletedOrder = () => {
    router.push(EPagesRoutes.CompletedOrder);
  };

  return (
    <div className={cx.wrapperPersonalData}>
      <OrderContext.Provider value={contextValue}>
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
            <PersonalDataPolicy />
          </div>
        </form>

        <div className={cx.btnClickSubmitForm}>
          <div className={cx.btnWrap}>
            <Button onClick={toCompletedOrder} type="submit">
              Оформить заказ
            </Button>
          </div>
        </div>
      </OrderContext.Provider>
    </div>
  );
};

export default PersonalData;
