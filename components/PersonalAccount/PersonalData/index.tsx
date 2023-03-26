import { useRef } from 'react';

import Input from '@/components/common/Input';
import Text from '@/components/common/Text';

import cx from './index.module.scss';

const PersonalData = () => {
  const formDataObject: any = {};

  const formRef = useRef<any>();

  const onChangeForm = (e: any) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      for (const [q, value] of formData) {
        formDataObject[q] = value;
      }
    }
  };

  return (
    <div className={cx.wrapper_presonal_data}>
      <form ref={formRef} onChange={onChangeForm} id="form">
        <div className={cx.flex_form}>
          <div className={cx.leftBlockform}>
            <Text size="big">личные данные</Text>
            <Input type="text" name="name" placeholder="Иванов" />
            <Input type="text" name="firstName" placeholder="Иван" />
            <Input type="text" name="lastName" placeholder="Иванович" />
            <Input type="date" name="age" placeholder="дд.мм.гггг" />

            <Text size="big">пол</Text>
            <div className={cx.floor_checked}>
              <label>
                <Input type="checkbox" name="floorMen" />
                мужской
              </label>

              <label className={cx.twoLabel}>
                <Input type="checkbox" name="floorWoomen" />
                женский
              </label>
            </div>
          </div>

          <div className={cx.rightBlockform}>
            <Text size="big">контактные данные</Text>
            <Input type="email" name="mail" placeholder="электронная почта" />
            <Input type="tel" name="tel" placeholder="+7 (999) 999-99-99" />
            <Input type="text" name="city" placeholder="Нижний Новгород" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
