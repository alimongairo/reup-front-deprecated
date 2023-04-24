import Image from 'next/image';
import { useState } from 'react';

import Collapse from '@/components/common/Collapse';
import Button from '@/components/common/Button';
import SchemeDescription from '@/components/CreateBrand/SchemeDescription';
import Divider from '@/components/common/Divider';
import Text from '@/components/common/Text';

import cx from './index.module.scss';

import scheme1 from './scheme1.jpg';
import scheme2 from './scheme2.jpg';
import scheme3 from './scheme3.jpg';
import { useRouter } from 'next/router';
import { EPagesRoutes } from '@/constants/router';

const examples = [scheme1, scheme2, scheme3];

const CreateBrandLayout = () => {
  const router = useRouter();
  const [activeScheme, setActiveScheme] = useState(0);

  const onChoose = () => {
    const searchParams = new URLSearchParams({
      schemeNum: String(activeScheme),
      editable: 'true',
    });
    router.push(EPagesRoutes.Brand + '/0?' + searchParams.toString());
  };

  return (
    <div className={cx.wrapper}>
      <div className={cx.options}>
        <Collapse
          isOpen={activeScheme === 0}
          onOpen={() => setActiveScheme(0)}
          title={'шаблон / 1'}
          content={
            <>
              <SchemeDescription
                description={
                  'описание шаблона (столько-то фото/видео, столько-то блоков для текста)'
                }
              />
            </>
          }
        />
        <Divider direction={'horizontal'} />
        <Collapse
          title={'шаблон / 2'}
          isOpen={activeScheme === 1}
          onOpen={() => setActiveScheme(1)}
          content={
            <SchemeDescription
              description={
                'описание шаблона (столько-то фото/видео, столько-то блоков для текста)'
              }
            />
          }
        />
        <Divider direction={'horizontal'} />
        <Collapse
          title={'шаблон / 3'}
          isOpen={activeScheme === 2}
          onOpen={() => setActiveScheme(2)}
          content={
            <SchemeDescription
              description={
                'описание шаблона (столько-то фото/видео, столько-то блоков для текста)'
              }
            />
          }
        />
        <Button size={'small'} onClick={onChoose}>
          выбрать
        </Button>
      </div>
      <div className={cx.example}>
        <Text size={'thin'}>пример страницы бренда по выбранному шаблону</Text>
        <Image src={examples[activeScheme]} alt={'activeScheme'} />
      </div>
    </div>
  );
};

export default CreateBrandLayout;
