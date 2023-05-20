import { useMemo, useState } from 'react';
import classNames from 'classnames';

import {
  IMenuContext,
  MenuContext,
  menuMaps,
} from '@/components/Brands/Menu/helpers';

import cx from './index.module.scss';
import { useRouter } from 'next/router';
import {
  EFamilies,
  ELabelsName,
  TSchemeData,
  TSchemeNum,
} from '@/components/Brands/Menu/models';
import { useSelector } from 'react-redux';
import { brandSettingsSelector } from '@/store/brandSetting/selectors';

interface IProps {
  visible: boolean;
}

const MenuHeader = ({ visible }: IProps) => {
  const schemeData = useSelector(brandSettingsSelector);
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(ELabelsName.DefaultList);
  const DisplayComponent = menuMaps.get(activeMenu);

  const toHome = () => {
    setActiveMenu(ELabelsName.DefaultList);
  };

  const updateData = (newData: TSchemeData) => {
    console.log({ newData, schemeData });
  };

  const initialContextValue: IMenuContext = useMemo(() => {
    return {
      setActiveMenu,
      toHome,
      schemeNum: Number(router.query.schemeNum) as TSchemeNum,
      schemeData: schemeData,
      updateData,
    };
  }, [router.query.schemeNum]);

  return (
    <div className={classNames(cx.wrapper, { [cx.visible]: visible })}>
      <MenuContext.Provider value={initialContextValue}>
        {DisplayComponent}
      </MenuContext.Provider>
    </div>
  );
};

export default MenuHeader;
