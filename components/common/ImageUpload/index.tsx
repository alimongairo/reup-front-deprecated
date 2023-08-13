import { useCallback } from 'react';
import cx from './index.module.scss';

import Button from '../Button';
import Image from 'next/image';

import image from './image.jpg';
import icon from '@/static/icons/close.svg';

interface Props {
  value: any;
  onChange: any;
  main?: boolean;
}

const ImageUpload = ({ main, value, onChange }: Props) => {
  const handleClick = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.addEventListener('change', async (e: any) => {
      // @ts-ignore
      const file: File = Array.from(e.currentTarget.files)[0];
      onChange(file);
      input.remove();
    });
    input.click();
  }, [onChange]);

  const handleDelete = useCallback(() => onChange(null), [onChange]);

  if (main) {
    return value ? (
      <div className={cx.previewWrap}>
        <Image className={cx.previewMain} src={image} alt="media" />
        <div className={cx.iconBox}>
          <Image
            src={icon}
            alt="delete"
            className={cx.icon}
            onClick={handleDelete}
          />
        </div>
      </div>
    ) : (
      <div className={cx.main}>
        <Button onClick={handleClick}>
          <div className={cx.titleBox}>
            <div>+</div>
            <div className={cx.title}>добавить фото обложки</div>
          </div>
          <div className={cx.titleBox} style={{ marginTop: '10px' }}>
            <div>обложкой может быть только фотография</div>
          </div>
        </Button>
      </div>
    );
  }

  return value ? (
    <div className={cx.previewWrap}>
      <Image className={cx.preview} src={image} alt="media" />
      <div className={cx.iconBox}>
        <Image
          src={icon}
          alt="delete"
          className={cx.icon}
          onClick={handleDelete}
        />
      </div>
    </div>
  ) : (
    <div className={cx.common}>
      <Button onClick={handleClick}>
        <div className={cx.titleBox}>
          <div>+</div>
          <div className={cx.title}>
            фото
            <br />
            видео
          </div>
        </div>
      </Button>
    </div>
  );
};

export default ImageUpload;
