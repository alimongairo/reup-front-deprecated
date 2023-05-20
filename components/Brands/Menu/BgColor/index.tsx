import { useContext } from 'react';

import Container from '@/components/Brands/Menu/Container';
import Options from '@/components/Brands/Menu/BgColor/Options';
import { MenuContext } from '@/components/Brands/Menu/helpers';

const BgColor = () => {
  const menuContext = useContext(MenuContext);
  return (
    <Container
      title={'изменить цвет фона и кнопок'}
      onBack={menuContext?.toHome}
    >
      <Options />
    </Container>
  );
};

export default BgColor;
