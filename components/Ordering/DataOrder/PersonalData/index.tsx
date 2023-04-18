import Heading from '@/components/common/Heading';
import Input from '@/components/common/Input';
import cx from './index.module.scss';

const PersonalData = () => {
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
    </div>
  );
};

export default PersonalData;
