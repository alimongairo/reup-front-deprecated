import { useContext } from 'react';

import Container from '@/components/Brands/Menu/Container';
import { MenuContext } from '@/components/Brands/Menu/helpers';
import Options from '@/components/Brands/Menu/ColorAndFamily/Options';

const ColorAndFamily = () => {
  const contextMenu = useContext(MenuContext);
  return (
    <Container
      title={'изменить цвет и шрифт текста'}
      onBack={contextMenu?.toHome}
    >
      <Options />
    </Container>
  );
};
export default ColorAndFamily;
