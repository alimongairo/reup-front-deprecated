import classNames from 'classnames';

import Button from '@/components/common/Button';
import HeaderForEdit from '@/components/Brands/HeaderForEdit';
import Heading from '@/components/common/Heading';
import LinkWithArrow from '@/components/common/LinkWithArrow';
import Text from '@/components/common/Text';

import cx from './index.module.scss';
import { useAppSelector } from '@/hooks/store';
import { brandSettingsSelector } from '@/store/brandSetting/selectors';
import Slider, { ISlide } from '@/components/Brands/Scheme1/Slider';

const EditableScheme = () => {
  const data = useAppSelector(brandSettingsSelector);

  const slides: [ISlide, ISlide] = [
    {
      title:
        data.editText.find((item) => item.name === 'brandName')?.value ||
        'название бренда',
      imgSource: '',
    },
    {
      title: 'о нас',
      description:
        data.editText.find((item) => item.name === 'descriptionSlide2')
          ?.value || 'о нас',
      imgSource: '',
    },
  ];

  const btn1 = data.editText.find((item) => item.name === 'btn1')?.value || '';
  const btn2 = data.editText.find((item) => item.name === 'btn2')?.value || '';

  const categoriesList = data.categories.value;

  const text2 =
    data.editText.find((item) => item.name === 'text')?.value || 'текст 2';

  return (
    <>
      <HeaderForEdit />
      <Slider slides={slides} withUploadBtns />
      <div className={cx.navigation}>
        <div className={cx.left}>
          <Heading tag="h2">категории товаров</Heading>
          <LinkWithArrow color={'black'} text={<Text>больше</Text>} />
          <div className={cx.navItems}>
            {categoriesList.map((item) => (
              <Button key={item.name} size={'small'}>
                {item.title}
              </Button>
            ))}
          </div>
        </div>
        <div className={cx.right}>
          <div className={cx.row}>
            <Heading tag="h2">{btn1}</Heading>
            <LinkWithArrow color={'black'} text={<Text>больше</Text>} />
          </div>
          <div className={cx.row}>
            <Heading tag="h2">{btn2}</Heading>
            <LinkWithArrow color={'black'} text={<Text>больше</Text>} />
          </div>
        </div>
      </div>
      <div className={cx.gallery}>
        <Heading tag="h2" className={cx.galleryTitle}>
          {text2}
        </Heading>
        <div className={cx.galleryItem}>
          <Button transparent>добавить фото</Button>
        </div>
        <div className={cx.galleryItem}>
          <Button transparent>добавить фото</Button>
        </div>
        <div className={cx.galleryItem}>
          <Button transparent>добавить фото / видео</Button>
        </div>
        <div className={classNames(cx.galleryItem, cx.text)}>
          <Text size="big">заголовок</Text>
          <Text size="thin">текстовый блок с описанием товара / реклама</Text>
        </div>
      </div>
    </>
  );
};

export default EditableScheme;
