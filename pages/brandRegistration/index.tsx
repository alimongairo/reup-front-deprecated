import MainLayout from '@/layouts/MainLayout';

import Tabs, { ETabsView } from '@/components/common/Tabs';
import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';
import BrandRegistrationForm from '@/components/BrandRegistrationForm';
import SubHeaderLK from '@/components/SubHeaderLK';

import cx from './index.module.scss';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  IFreelanceFormFields,
  ICorporateFormfields,
  corporateFormFields,
  freelanceFormFields,
} from './fields';

const BrandRegistration = () => {
  const formRef = useRef<HTMLFormElement>(null);
  // TODO: types
  const [formData, setFormData] = useState<
    IFreelanceFormFields | ICorporateFormfields | {}
  >({});

  const onChangeForm = () => {
    if (formRef.current) {
      const data = new FormData(formRef.current);
      setFormData((state: any) => ({
        ...state,
        ...Object.fromEntries([...data]),
      }));
      // после отправки нужно будет чистить setFormData({})
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
          tabs={[
            {
              id: 1,
              title: '1',
              content: (
                <BrandRegistrationForm
                  className={cx.subcontent}
                  formRef={formRef}
                  fields={freelanceFormFields}
                />
              ),
            },
            {
              id: 2,
              title: '2',
              content: (
                <BrandRegistrationForm
                  className={cx.subcontent}
                  formRef={formRef}
                  fields={corporateFormFields}
                />
              ),
            },
          ]}
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
          <Button onClick={onChangeForm}>
            отправить регистрацию и перейти к оформлению
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default BrandRegistration;
