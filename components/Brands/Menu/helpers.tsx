import { createContext, ReactNode } from 'react';

import DefaultMenu from '@/components/Brands/Menu/HomeMenu';
import Categories from '@/components/Brands/Menu/Categories';
import ColorAndFamily from '@/components/Brands/Menu/ColorAndFamily';
import EditText from '@/components/Brands/Menu/EditText';
import BgColor from '@/components/Brands/Menu/BgColor';
import {
  ELabelsName,
  TSchemeData,
  TSchemeNum,
} from '@/components/Brands/Menu/models';

export const menuMaps = new Map<ELabelsName, ReactNode>([
  [ELabelsName.DefaultList, <DefaultMenu key={1} />],
  [ELabelsName.AddCategory, <Categories key={2} />],
  [ELabelsName.ColorAndFamily, <ColorAndFamily key={3} />],
  [ELabelsName.EditText, <EditText key={4} />],
  [ELabelsName.BgColor, <BgColor key={5} />],
]);

export interface IMenuContext {
  setActiveMenu: (activeMenu: ELabelsName) => void;
  toHome: () => void;
  schemeNum: TSchemeNum;
  schemeData: TSchemeData;
  updateData: (data: TSchemeData) => void;
}

export const MenuContext = createContext<IMenuContext | null>(null);
