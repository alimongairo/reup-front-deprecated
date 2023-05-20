import Collapse from '@/components/common/Collapse';
import { EColors, IColor } from '@/components/common/Colors';
import { Colors } from '@/components/common/Colors';
import Divider from '@/components/common/Divider';

import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { setBrandSettingsByField } from '@/store/brandSetting/slice';
import { brandSettingsBgColorsSelector } from '@/store/brandSetting/selectors';

const BgColorOption = ({ title, value, name }: IColor & { title: string }) => {
  const dispatch = useAppDispatch();
  const bgColors = useAppSelector(brandSettingsBgColorsSelector);

  const onChange = (color: EColors) => {
    const newData = bgColors.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          value: color,
        };
      }
      return item;
    });

    dispatch(setBrandSettingsByField({ field: 'bgColor', newData: newData }));
  };

  return (
    <Collapse
      title={title}
      content={<Colors value={value} onChange={onChange} />}
    />
  );
};

const Options = () => {
  const bgColors = useAppSelector(brandSettingsBgColorsSelector);

  return (
    <div>
      {bgColors?.map((color, index) => (
        <>
          <BgColorOption
            key={color.name}
            title={color.title}
            name={color.name}
            value={color.value}
          />
          <Divider key={color.name} direction={'horizontal'} />
        </>
      ))}
    </div>
  );
};

export default Options;
