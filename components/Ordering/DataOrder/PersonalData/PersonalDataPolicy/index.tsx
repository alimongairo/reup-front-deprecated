import { useContext, useEffect, useState } from 'react';
import { EPersonalDataType, OrderContext } from '@/components/Ordering/context';
import Checkbox, { ICheckboxProps } from '@/components/common/Checkbox';
import Text from '@/components/common/Text';
import cx from './index.module.scss';
import { ECompound } from '@/components/common/FiltersForProducts/context';

const personalCheck: ICheckboxProps[] = [
  {
    label: 'Обработка персональных данных',
    value: 'personal',
    id: 'personal',
    labelPlacement: 'right',
  },
  {
    label: 'Рассылки',
    value: 'mailing',
    id: 'mailing',
    labelPlacement: 'right',
  },
];

const PersonalDataPolicy = () => {
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
      <div>
        <Checkbox
          onChange={onChange}
          label=""
          labelPlacement="right"
          id={'personData'}
        />
      </div>
      <label htmlFor="personData">
        <Text size="thin">
          я ознакомился и согласен с
          <span>политикой обработки персональных данных</span> и
          пользовательским соглашением
        </Text>
      </label>
    </div>
  );
};

export default PersonalDataPolicy;
