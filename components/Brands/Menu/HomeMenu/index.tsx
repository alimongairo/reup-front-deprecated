import { useContext } from 'react';
import { useRouter } from 'next/router';

import Container from '@/components/Brands/Menu/Container';
import LinkWithArrow from '@/components/common/LinkWithArrow';
import Text from '@/components/common/Text';
import { MenuContext } from '@/components/Brands/Menu/helpers';
import { ELabelsName } from '@/components/Brands/Menu/models';

import cx from '@/components/Brands/Menu/index.module.scss';
import { EPagesRoutes } from '@/constants/router';

const DefaultMenu = () => {
  const router = useRouter();
  const contextValue = useContext(MenuContext);

  const toChangeScheme = () => {
    router.push(EPagesRoutes.CreateBrand);
  };

  return (
    <Container title={'окно редактирования'}>
      <LinkWithArrow
        classNames={cx.link}
        color={'black'}
        text={<Text>добавить текст</Text>}
        onClick={() => contextValue?.setActiveMenu(ELabelsName.EditText)}
      />
      <LinkWithArrow
        classNames={cx.link}
        color={'black'}
        text={<Text className={cx.text}>изменить цвет фона и кнопок</Text>}
        onClick={() => contextValue?.setActiveMenu(ELabelsName.BgColor)}
      />
      <LinkWithArrow
        classNames={cx.link}
        color={'black'}
        text={<Text className={cx.text}>изменить шрифт и цвет текста</Text>}
        onClick={() => contextValue?.setActiveMenu(ELabelsName.ColorAndFamily)}
      />
      <LinkWithArrow
        classNames={cx.link}
        color={'black'}
        text={<Text>выбрать категории</Text>}
        onClick={() => contextValue?.setActiveMenu(ELabelsName.AddCategory)}
      />
      <LinkWithArrow
        classNames={cx.link}
        color={'black'}
        text={<Text>изменить шаблон</Text>}
        onClick={toChangeScheme}
      />
    </Container>
  );
};

export default DefaultMenu;
