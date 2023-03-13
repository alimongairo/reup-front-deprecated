import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import Input from '@/components/common/Input';
import { useState } from 'react';
import cx from './index.module.scss';

const PersonalData = () => {
  const [name, setName] = useState();

  const getFormValue = (event: any) => {
    event.preventDefault();
    console.log(event.target.name.value);
  };

  const onChangeName = (event: any) => {
    setName(event.target.value);
    console.log(name);
  };

  return (
    <div className={cx.wrapper_presonal_data}>
      <form id="form">
        <div className={cx.flex_form}>
          <div className={cx.leftBlockform}>
            <Heading tag="h4">личные данные</Heading>
            <Input
              onChange={onChangeName}
              type="text"
              name="name"
              placeholder="Иванов"
              value={name}
            />
            <Input type="text" name="firstName" placeholder="Иван" />
            <Input type="text" name="lastName" placeholder="Иванович" />
            <Input type="date" name="age" placeholder="дд.мм.гггг" />

            <Heading className={cx.floor} tag="h4">
              пол
            </Heading>
            <div className={cx.floor_checked}>
              <label>
                <Input type="checkbox" name="floor" />
                мужской
              </label>

              <label className={cx.twoLabel}>
                <Input type="checkbox" name="floor" />
                женский
              </label>
            </div>
          </div>

          <div className={cx.rightBlockform}>
            <Heading tag="h4">контактные данные</Heading>
            <Input type="email" name="name" placeholder="электронная почта" />
            <Input type="tel" name="name" placeholder="+7(999)999-99-99" />
            <Input type="text" name="name" placeholder="Нижний Новгород" />
          </div>
        </div>

        {/* <Button className={cx.submit} onClick={(e) => getFormValue(e)}>сохранить</Button> */}
        <button
          type="submit"
          className={cx.submit}
          onClick={(e) => getFormValue(e)}
        >
          сохранить
        </button>
      </form>
    </div>
  );
};

export default PersonalData;
