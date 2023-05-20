import Heading from '@/components/common/Heading';
import { IRadioProps, RadioGroup } from '@/components/common/Radio';
import { EFamilies } from '@/components/Brands/Menu/models';

const families: IRadioProps[] = [
  {
    label: 'Dela Gothic One',
    value: EFamilies.DelaGothicOne,
    labelPlacement: 'left',
  },
  { label: 'Gilroy', value: EFamilies.Gilroy, labelPlacement: 'left' },
  { label: 'Poppins', value: EFamilies.Poppins, labelPlacement: 'left' },
  { label: 'Roboto', value: EFamilies.Roboto, labelPlacement: 'left' },
  { label: 'Comfortaa', value: EFamilies.Comfortaa, labelPlacement: 'left' },
];

interface IProps {
  family?: EFamilies;
  onChange: (value: IRadioProps['value'], fieldName: string) => void;
}

const SelectFamily = ({ family, onChange }: IProps) => {
  const onChangeGroup = (newValue: IRadioProps['value']) => {
    onChange(newValue, 'family');
  };

  return (
    <div>
      <Heading tag={'h4'} style={{ marginBottom: '1rem' }}>
        шрифт
      </Heading>
      <RadioGroup
        value={family}
        radioList={families}
        direction={'vertical'}
        groupName={'family'}
        onChangeGroup={onChangeGroup}
      />
    </div>
  );
};

export default SelectFamily;
