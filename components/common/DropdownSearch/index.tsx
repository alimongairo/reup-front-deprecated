import { useContext, useEffect, useRef, useState } from 'react';
import Input from '@/components/common/Input';
import searchLogo from '@/static/icons/serch.svg';
import Image from 'next/image';
import cx from './index.module.scss';
import { CheckboxGroup, ICheckboxProps } from '../Checkbox';
import { FilterContext } from '@/components/common/FiltersForProducts/context';

interface Brand {
  label: string;
  value: string;
  id: string;
  labelPlacement: 'left' | 'right' | 'top';
}

const brandsInitial: Brand[] = [
  // {
  //   label: 'Выделить все',
  //   value: 'all',
  //   id: 'all',
  //   labelPlacement: 'right',
  // },
  {
    label: 'Бренд1',
    value: 'brand1',
    id: 'brand1',
    labelPlacement: 'right',
  },
  {
    label: 'Бренд2',
    value: 'brand2',
    id: 'brand2',
    labelPlacement: 'right',
  },
  {
    label: 'Бренд3',
    value: 'brand3',
    id: 'brand4',
    labelPlacement: 'right',
  },
  {
    label: 'Бренд4',
    value: 'brand4',
    id: 'brand4',
    labelPlacement: 'right',
  },
  {
    label: 'Бренд5',
    value: 'brand5',
    id: 'brand5',
    labelPlacement: 'right',
  },
  {
    label: 'Бренд6',
    value: 'brand6',
    id: 'brand6',
    labelPlacement: 'right',
  },
  {
    label: 'Бренд7',
    value: 'brand7',
    id: 'brand7',
    labelPlacement: 'right',
  },
  {
    label: 'Бренд8',
    value: 'brand8',
    id: 'brand8',
    labelPlacement: 'right',
  },
  {
    label: 'Бренд9',
    value: 'brand9',
    id: 'brand9',
    labelPlacement: 'right',
  },
  {
    label: 'Бренд10',
    value: 'brand10',
    id: 'brand10',
    labelPlacement: 'right',
  },
  {
    label: 'Бренд11',
    value: 'brand11',
    id: 'brand11',
    labelPlacement: 'right',
  },
];

const DropdownSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  // const [isAll, setIsAll] = useState<boolean>(false);
  const { setFilterData } = useContext(FilterContext);
  const [brandValue, setBrandValue] = useState<Record<any, boolean>>({
    brand1: false,
    brand2: false,
    brand3: false,
    brand4: false,
    brand5: false,
    brand6: false,
    brand7: false,
    brand8: false,
    brand9: false,
    brand10: false,
    brand11: false,
  });
  const [brandList, setBrandList] = useState<Brand[]>(brandsInitial);
  const [searchBrandList, setSearchBrandList] =
    useState<Brand[]>(brandsInitial);

  const onChange = (changedValue: Record<any, boolean>) => {
    setBrandValue(changedValue);

    // if (Object.keys(changedValue).includes('all')) {
    //   brandList.forEach((item: any) => {
    //     item.checked = isAll;
    //   });
    // }
  };

  useEffect(() => {
    if (setFilterData) {
      let newValue = [] as any[];

      // if (Object.keys(brandValue).includes('all')) {
      //   Object.entries(brandList).flatMap((item: any) => { if (item[1].value !== "all") newValue.push(item[1].value) });
      // } else {

      newValue = Object.entries(brandValue).flatMap((item) => {
        if (item[1]) {
          return item[0] as any;
        }
        return [];
      });

      // }

      setFilterData({ brands: newValue.length ? newValue : undefined });
    }
  }, [brandValue, setFilterData]);

  useEffect(() => {
    if (searchValue) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
      setSearchBrandList(brandList);
    }

    const brandListCopy = [...brandList];
    const newList = brandListCopy.filter((brand: Brand) => {
      if (brand.label) {
        return brand.label.toLowerCase().includes(searchValue);
      }
    });

    setSearchBrandList(newList);
  }, [brandList, searchValue]);

  const [heightContent, setHeightContent] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (!isDropdown) {
        const height = contentRef.current.getBoundingClientRect().height;
        console.log('HERE');
        const minHeight = '0px';
        if (height !== 0) {
          setHeightContent(height);
        }
        contentRef.current.style.height = minHeight;
        return;
      }
      contentRef.current.style.height = `${heightContent}px`;
    }
  }, [heightContent, isDropdown]);

  return (
    <div className={cx.mainWrapper}>
      <div className={cx.searchWrapper}>
        <Input
          placeholder="поиск"
          spellCheck={false}
          className={cx.input}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Image
          src={searchLogo}
          alt="searchLogo"
          width={18}
          height={18}
          style={{ cursor: 'pointer' }}
          className={cx.searchIcon}
        />
      </div>
      <div ref={contentRef} className={cx.dropdownWrapper}>
        <CheckboxGroup
          checkboxList={
            searchBrandList.length && isDropdown ? searchBrandList : brandList
          }
          groupName={'compounds'}
          direction={'vertical'}
          onChangeGroup={onChange}
        />
      </div>
    </div>
  );
};

export default DropdownSearch;
