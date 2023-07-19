import Text from '@/components/common/Text';
import CollapseCascade from '@/components/common/CollapseCascade';
import { CheckboxGroup } from '@/components/common/Checkbox';

import cx from '@/components/common/FiltersForProducts/index.module.scss';

// const categories: any[] = [
//   {
//     label: 'выделить все',
//     value: 'all',
//     id: 'all',
//     labelPlacement: 'right',
//   },
//   {
//     label: 'Cинтетика',
//     value: 'synthetics',
//     id: 'synthetics',
//     labelPlacement: 'right',
//   },
// ];

const categories: any[] = [
  {
    label: 'обувь',
    value: 'smth',
    id: 'smth',
    list: [
      {
        label: 'label сапоги',
        value: 'all',
        id: 'all',
        list: [
          {
            label: '1 сапоги',
            value: 'smth',
            id: 'smth',
            list: [{ label: 'trtrtrt smth point', value: 'smth', id: 'smth' }],
          },
          {
            label: '2 сапоги',
            value: 'smth',
            id: 'smth',
            list: [{ label: 'trtrtrt smth point', value: 'smth', id: 'smth' }],
          },
        ],
      },
      // {
      //   label: 'smth subpoint',
      //   value: 'smth',
      //   id: 'smth',
      // },
    ],
  },
];

const Categories = () => {
  const onChange = () => {
    console.log('onChange');
  };

  return (
    <div className={cx.filterItem}>
      <CollapseCascade
        title={
          <Text className={cx.subTitle} size="big">
            категории
          </Text>
        }
        // content={
        //   <CheckboxGroup
        //     checkboxList={categories}
        //     groupName={'compounds'}
        //     direction={'vertical'}
        //     onChangeGroup={onChange}
        //   />
        // }
        content={categories}
      />
    </div>
  );
};

export default Categories;
