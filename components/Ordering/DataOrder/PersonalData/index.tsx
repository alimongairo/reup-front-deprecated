import Heading from '@/components/common/Heading';
import Input from '@/components/common/Input';
import Checkbox from '@/components/common/Checkbox';
import cx from './index.module.scss';
import { IPropsOrder } from '../..';
import Text from '@/components/common/Text';

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
        <div>
          <Checkbox label="" labelPlacement="right" id={'checkAll'} />
        </div>
        <div>
          <Text size="thin">
            я ознакомился и согласен с политикой обработки персональных данных и
            пользовательским соглашением
          </Text>
        </div>

        {/* <Checkbox
          label="я согласен получать новости об акциях и специальных предложениях"
          labelPlacement="right"
          id={'checkAll'}
        /> */}
      </div>
    </div>
  );
};

export default PersonalData;
