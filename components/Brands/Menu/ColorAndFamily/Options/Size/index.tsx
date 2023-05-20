import Heading from '@/components/common/Heading';
import { IRadioProps, RadioGroup } from '@/components/common/Radio';

const sizes: IRadioProps[] = [
  {
    label: '32px',
    value: 32,
    labelPlacement: 'left',
  },
  {
    label: '28px',
    value: 28,
    labelPlacement: 'left',
  },
  {
    label: '20px',
    value: 20,
    labelPlacement: 'left',
  },
  {
    label: '16px',
    value: 16,
    labelPlacement: 'left',
  },
];

interface IProps {
  value?: number;
  onChange: (value: IRadioProps['value'], fieldName: string) => void;
}

const Size = ({ value, onChange }: IProps) => {
  const onChangeGroup = (newValue: IRadioProps['value']) => {
    onChange(newValue, 'size');
  };
  return (
    <div>
      <Heading tag={'h4'}>размер</Heading>
      <RadioGroup
        value={value}
        radioList={sizes}
        groupName={'size'}
        direction={'horizontal'}
        onChangeGroup={onChangeGroup}
      />
    </div>
  );
};
export default Size;
