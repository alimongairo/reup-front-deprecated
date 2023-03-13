import Heading from '../common/Heading';
import BtnGroup from './BtnGroup';
import cx from './index.module.scss';
import PersonalData from './PersonalData';

const PersonalAccount = () => {
  return (
    <div className={cx.wrapper}>
      <BtnGroup />

      <div className={cx.personal_data}>
        <Heading tag="h1">мои данные</Heading>

        <PersonalData />
      </div>
    </div>
  );
};

export default PersonalAccount;
