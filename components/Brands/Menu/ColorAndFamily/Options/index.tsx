import Collapse from '@/components/common/Collapse';
import SelectFamily from '@/components/Brands/Menu/ColorAndFamily/Options/SelectFamily';
import PreviewFamily from '@/components/Brands/Menu/ColorAndFamily/Options/PreviewFamily';
import Size from '@/components/Brands/Menu/ColorAndFamily/Options/Size';
import { Colors } from '@/components/common/Colors';
import Divider from '@/components/common/Divider';
import { TColorAndFamily } from '@/components/Brands/Menu/models';

import { setBrandSettingsByField } from '@/store/brandSetting/slice';
import {
  brandSettingsColorAndFamilySelector,
  brandSettingsSelector,
} from '@/store/brandSetting/selectors';
import { useAppDispatch, useAppSelector } from '@/hooks/store';

import cx from './index.module.scss';

const ColorOption = ({ title, color, name, family, size }: TColorAndFamily) => {
  const dispatch = useAppDispatch();

  const brandSettings = useAppSelector(brandSettingsSelector);

  const onChange = (newValue: any, fieldName: string) => {
    if (brandSettings) {
      dispatch(
        setBrandSettingsByField({
          field: 'colorAndFamily',
          newData: brandSettings.colorAndFamily.map((item) => {
            if (item.name === name) {
              return {
                ...item,
                [fieldName]: newValue,
              };
            }
            return item;
          }),
        }),
      );
    }
  };

  return (
    <Collapse
      title={title}
      content={
        <div className={cx.content}>
          <PreviewFamily family={family} />
          <SelectFamily family={family} onChange={onChange} />
          <Size value={size} onChange={onChange} />
          <Colors
            value={color}
            onChange={(value) => onChange(value, 'color')}
          />
        </div>
      }
    />
  );
};

const Options = () => {
  const colorAndFamily = useAppSelector(brandSettingsColorAndFamilySelector);
  return (
    <div>
      {colorAndFamily.map((field) => {
        return (
          <>
            <ColorOption
              title={field.title}
              color={field.color}
              family={field.family}
              name={field.name}
              size={field.size}
            />
            <Divider direction={'horizontal'} />
          </>
        );
      })}
    </div>
  );
};

export default Options;
