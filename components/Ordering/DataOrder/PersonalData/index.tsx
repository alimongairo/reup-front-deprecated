import Checkbox from '@/components/common/Checkbox';
import Heading from '@/components/common/Heading';
import Input from '@/components/common/Input';
import Text from '@/components/common/Text';
import { IPropsOrder } from '../..';
import cx from './index.module.scss';

const PersonalData = ({ isLogined }: IPropsOrder) => {
  return (
    <div className={cx.wrapperPersonalData}>
      <Heading tag="h2">2. данные получателя</Heading>
      <div className={cx.inputPersonalData}>
        <Heading tag="h4">как вас зовут?</Heading>
        <Input type="text" placeholder="фамилия*" />
        <Input type="text" placeholder="имя*" />
        <Input type="text" placeholder="отчество" />

        <Heading className={cx.contact} tag="h4">
          контактные данные
        </Heading>
        <Input type="email" placeholder="электронная почта*" />
        <Input type="number" placeholder="номер телефона*" />
        <Heading className={cx.contact} tag="h4">
          *-поля обязательные для заполнения
        </Heading>
      </div>

      <div className={cx.checkbox}>
        <div className={cx.checkboxOne}>
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
        <div className={cx.checkboxTwo}>
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
      </div>
    </div>
  );
};

export default PersonalData;
