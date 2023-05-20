import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BRAND_SETTING_ALIAS } from '@/store/brandSetting/types';
import {
  EFamilies,
  TCategory,
  TSchemeData,
} from '@/components/Brands/Menu/models';
import { EColors } from '@/components/common/Colors';

const initialState: TSchemeData = {
  editText: [
    { name: 'brandName', title: 'название бренда', value: 'Название бренда 1' },
    {
      name: 'descriptionSlide2',
      title: 'текст с описанием бренда (2 слайд)',
      value: 'текст с описанием бренда (2 слайд)',
    },
    { name: 'title', title: 'заголовок', value: 'заголовок' },
    { name: 'mainText', title: 'основной текст', value: 'основной текст' },
    { name: 'btn1', title: 'кнопка 1', value: 'кнопка 1' },
    { name: 'btn2', title: 'кнопка 2', value: 'кнопка 2' },
    { name: 'text', title: 'текст 2', value: 'текст 2' },
  ],
  bgColor: [
    { title: 'фон', value: EColors.Pink, name: 'bgColor' },
    { title: 'категории', name: 'category' },
    { title: 'кнопка 1', name: 'btn1' },
    { title: 'кнопка 2', name: 'btn2' },
    { title: 'компоненты', name: 'components' },
  ],
  categories: {
    allCategories: [
      { title: 'верхняя одежда', name: 'outerwear' },
      { title: 'штаны-oversize', name: 'pants-oversize' },
      { title: 'category 1', name: 'category1' },
      { title: 'category 2', name: 'category2' },
      { title: 'category 3', name: 'category3' },
      { title: 'category 4', name: 'category4' },
      { title: 'category 5', name: 'category5' },
      { title: 'category 6', name: 'category6' },
    ],
    value: [{ title: 'штаны-oversize', name: 'pants-oversize' }],
  },
  colorAndFamily: [
    {
      title: 'название бренда',
      name: 'brandName',
      family: EFamilies.DelaGothicOne,
      size: 32,
      color: EColors.Black,
    },
    {
      title: 'о нас',
      name: 'about',
      family: EFamilies.DelaGothicOne,
      size: 32,
      color: EColors.Black,
    },
    {
      title: 'текст с описанием бренда (2 слайд)',
      name: 'slide2',
      family: EFamilies.DelaGothicOne,
      size: 32,
      color: EColors.Black,
    },
    {
      title: 'категории товаров, кнопки 1,2',
      name: 'category',
      family: EFamilies.DelaGothicOne,
      size: 32,
      color: EColors.Black,
    },
    {
      title: 'заголовок',
      name: 'title',
      family: EFamilies.DelaGothicOne,
      size: 32,
      color: EColors.Black,
    },
    {
      title: 'основной текст',
      name: 'mainText',
      family: EFamilies.DelaGothicOne,
      size: 32,
      color: EColors.Black,
    },
    {
      title: 'текст 2',
      name: 'text',
      family: EFamilies.DelaGothicOne,
      size: 32,
      color: EColors.Black,
    },
  ],
};

const brandSettingSlice = createSlice({
  name: BRAND_SETTING_ALIAS,
  initialState,
  reducers: {
    setBrandSettingsByField(
      state,
      action: PayloadAction<{
        field: keyof TSchemeData;
        newData: TSchemeData[keyof TSchemeData];
      }>,
    ) {
      return {
        ...state,
        [action.payload.field]: action.payload.newData,
      };
    },

    addCategory(state, action: PayloadAction<TCategory>) {
      const currentCategoriesMap = new Map(
        [...state.categories.value, action.payload].map((category) => [
          category.name,
          category,
        ]),
      );
      return {
        ...state,
        categories: {
          ...state.categories,
          value: [...currentCategoriesMap.values()],
        },
      };
    },
    removeCategory(state, action: PayloadAction<TCategory>) {
      return {
        ...state,
        categories: {
          ...state.categories,
          value: state.categories.value.filter(
            (category) => category.name !== action.payload.name,
          ),
        },
      };
    },
  },
});

export default brandSettingSlice.reducer;
export const { setBrandSettingsByField, addCategory, removeCategory } =
  brandSettingSlice.actions;
