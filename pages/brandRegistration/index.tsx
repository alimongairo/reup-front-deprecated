import MainLayout from '@/layouts/MainLayout';

import Tabs, { ETabsView } from '@/components/common/Tabs';
import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';
import FreelanceForm from '@/components/BrandRegistrationForm/forms/FreelanceForm';
import CorporateForm from '@/components/BrandRegistrationForm/forms/CorporateForm';
import SubHeaderLK from '@/components/SubHeaderLK';

import cx from './index.module.scss';

const tabs = [
  { id: 1, title: '1', content: <FreelanceForm className={cx.subcontent} /> },
  { id: 2, title: '2', content: <CorporateForm className={cx.subcontent} /> },
];

const BrandRegistration = () => {
  return (
    <MainLayout>
      <SubHeaderLK />
      <div className={cx.wrapper}>
        <Heading className={cx.heading}>регистрация бренда</Heading>
        <div className={cx.subheading}>
          <Heading tag="h2">1 /&nbsp;</Heading>
          <Heading tag="h2">укажи форму предпринимательства </Heading>
        </div>

        <Tabs
          tabs={tabs}
          view={ETabsView.BUTTONS}
          className={cx.tabs}
          tabHeader={
            <div className={cx.subheading}>
              <Heading tag="h2">2 /&nbsp;</Heading>
              <Heading tag="h2">заполни форму регистрации</Heading>
            </div>
          }
        />
        <div className={cx.subheading}>
          <Heading tag="h2">3 /&nbsp;</Heading>
          <Heading tag="h2">
            заверши регистрацию оформлением страницы бренда
          </Heading>
        </div>

        <div className={cx.subcontent}>
          <Button>отправить регистрацию и перейти к оформлению</Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default BrandRegistration;
