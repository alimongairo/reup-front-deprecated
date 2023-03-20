import Heading from '../common/Heading';
import PersonalData from './PersonalData';
import Category from '@/components/Main/Category';

import cx from './index.module.scss';

const PersonalAccount = () => {
  return (
    <div className={cx.wrapper}>
      <Category />
      <div className={cx.personal_data}>
        <Heading tag="h1">мои данные</Heading>
        <PersonalData />
      </div>
    </div>
  );
};

export default PersonalAccount;
