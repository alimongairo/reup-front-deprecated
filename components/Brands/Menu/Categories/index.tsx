import { useContext, useState } from 'react';

import Container from '@/components/Brands/Menu/Container';
import { MenuContext } from '@/components/Brands/Menu/helpers';
import Text from '@/components/common/Text';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { TCategory } from '@/components/Brands/Menu/models';

import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { brandSettingsCategoriesSelector } from '@/store/brandSetting/selectors';
import { addCategory, removeCategory } from '@/store/brandSetting/slice';

import cx from './index.module.scss';

const Categories = () => {
  const dispatch = useAppDispatch();
  const contextValue = useContext(MenuContext);

  const { allCategories, value: currentCategories } = useAppSelector(
    brandSettingsCategoriesSelector,
  );

  const [allCategoriesFiltered, setAllCategoriesFiltered] =
    useState<TCategory[]>(allCategories);

  const onAddCategory = (category: TCategory) => {
    dispatch(addCategory(category));
  };

  const onRemoveCategory = (category: TCategory) => {
    dispatch(removeCategory(category));
  };

  const onSearch = (value: string) => {
    if (!value) {
      setAllCategoriesFiltered(allCategories);
      return;
    }

    setAllCategoriesFiltered((state) =>
      state.filter((item) => item.title.includes(value)),
    );
  };

  return (
    <Container
      title={'добавить категории'}
      onBack={() => contextValue?.toHome()}
    >
      <Text size={'thin'}>
        Выберите 6-8 категорий Ваших товаров для блока Категории{' '}
      </Text>
      <Input
        placeholder={'название категории'}
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className={cx.searchResult}>
        {allCategoriesFiltered.map((item) => {
          return (
            <Button
              key={item.name}
              size={'small'}
              onClick={() => onAddCategory(item)}
            >
              {item.title}
            </Button>
          );
        })}
      </div>

      <Text>мой выбор</Text>
      <div className={cx.myChoice}>
        {currentCategories.map((item) => {
          return (
            <Button
              key={item.name}
              size={'small'}
              active
              onClick={() => onRemoveCategory(item)}
            >
              {item.title}
            </Button>
          );
        })}
      </div>
    </Container>
  );
};

export default Categories;
