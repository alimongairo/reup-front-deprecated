import { EPersonalDataType, OrderContext } from '@/components/Ordering/context';
import { CheckboxGroup, ICheckboxProps } from '@/components/common/Checkbox';
import { useContext, useEffect, useState } from 'react';
import cx from './index.module.scss';
import Text from '@/components/common/Text';

const personalCheck: ICheckboxProps[] = [
  {
    label: `я ознакомился и согласен с политикой обработки персональных данных и пользовательским соглашением`,
    value: 'personal',
    id: 'personal',
    labelPlacement: 'right',
  },
];
const mailingCheck: ICheckboxProps[] = [
  {
    label: 'я согласен получать новости об акциях и специальных предложениях',
    value: 'mailing',
    id: 'mailing',
    labelPlacement: 'right',
  },
];

const PersonalDataPolicy = ({
  personalFormCheck,
  setPersonalFormCheck,
}: any) => {
  const { setOrderData } = useContext(OrderContext);

  const [personalValue, setPersonal] = useState<
    Record<EPersonalDataType, boolean>
  >({
    personalData: false,
    mailing: false,
  });

  const onChange = (changedValue: Record<EPersonalDataType, boolean>) => {
    setPersonal((state) => {
      return {
        ...state,
        ...changedValue,
      };
    });
  };
  const onChangePersonal = (
    changedValue: Record<EPersonalDataType, boolean>,
  ) => {
    setPersonalFormCheck((state: any) => !state);
    setPersonal((state) => {
      return {
        ...state,
        ...changedValue,
      };
    });
  };

  useEffect(() => {
    if (setOrderData) {
      const newValue: EPersonalDataType[] = Object.entries(
        personalValue,
      ).flatMap((item) => {
        if (item[1]) {
          return item[0] as EPersonalDataType;
        }
        return [];
      });

      setOrderData({
        personalDataType: newValue.length ? newValue : undefined,
      });
    }
  }, [personalValue]);

  return (
    <div className={cx.checkboxMain}>
      <div className={cx.checkboxGroupOne}>
        <CheckboxGroup
          checkboxList={personalCheck}
          groupName={'personalChecks'}
          direction={'vertical'}
          onChangeGroup={onChangePersonal}
        />
        <Text size="thin">
          я ознакомился и согласен с{' '}
          <span>политикой обработки персональных данных</span> и
          пользовательским соглашением
        </Text>
      </div>

      <div className={cx.checkboxGroupTwo}>
        <CheckboxGroup
          checkboxList={mailingCheck}
          groupName={'personalChecks'}
          direction={'vertical'}
          onChangeGroup={onChange}
        />
        <Text size="thin">
          я согласен получать новости об акциях и специальных предложениях
        </Text>
      </div>
    </div>
  );
};

export default PersonalDataPolicy;
