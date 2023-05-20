import { useContext } from 'react';

import Collapse from '@/components/common/Collapse';
import Input from '@/components/common/Input';
import Divider from '@/components/common/Divider';
import { MenuContext } from '@/components/Brands/Menu/helpers';

import { brandSettingsTextSelector } from '@/store/brandSetting/selectors';
import { setBrandSettingsByField } from '@/store/brandSetting/slice';
import { useAppDispatch, useAppSelector } from '@/hooks/store';

import cx from './index.module.scss';

interface IEditTextOption {
  title: string;
  value: string;
  name: string;
}

const EditTextOption = ({ title, name, value }: IEditTextOption) => {
  const dispatch = useAppDispatch();
  const editText = useAppSelector(brandSettingsTextSelector);

  const onChange = (newValue: string) => {
    const newData = editText.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          value: newValue,
        };
      }
      return item;
    });
    dispatch(setBrandSettingsByField({ field: 'editText', newData }));
  };

  return (
    <Collapse
      title={title}
      content={
        <Input
          name={name}
          defaultValue={value}
          isTextArea
          className={cx.textarea}
          onChange={(e) => onChange(e.target.value)}
        />
      }
    />
  );
};

const Options = () => {
  const dispatch = useAppDispatch();
  const editText = useAppSelector(brandSettingsTextSelector);
  return (
    <div>
      {editText?.map((field) => {
        return (
          <>
            <EditTextOption
              key={field.name}
              title={field.title}
              name={field.name}
              value={field.value}
            />
            <Divider key={field.name} direction={'horizontal'} />
          </>
        );
      })}
    </div>
  );
};

export default Options;
