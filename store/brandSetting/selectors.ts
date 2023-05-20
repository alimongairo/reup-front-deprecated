import { RootState } from 'store';

export const brandSettingsSelector = (state: RootState) => state.brandSetting;

export const brandSettingsColorAndFamilySelector = (state: RootState) =>
  state.brandSetting.colorAndFamily;

export const brandSettingsBgColorsSelector = (state: RootState) =>
  state.brandSetting.bgColor;

export const brandSettingsCategoriesSelector = (state: RootState) =>
  state.brandSetting.categories;

export const brandSettingsTextSelector = (state: RootState) =>
  state.brandSetting.editText;
