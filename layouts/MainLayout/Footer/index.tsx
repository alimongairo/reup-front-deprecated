import Image from 'next/image';

import Text from '@/components/common/Text';
import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';

import vk from '@/static/icons/vk.svg';
import tg from '@/static/icons/tg.svg';
import instagram from '@/static/icons/instagram.svg';
import facebook from '@/static/icons/facebook.svg';

import cx from './index.module.scss';

const Footer = () => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.content}>
        <Heading tag="h2">REUP</Heading>
        <div className={cx.text}>
          <Text size="thin">Написать в поддержку</Text>
          <Text size="thin">FAQ</Text>
          <Text size="thin">Публичная оферта</Text>
        </div>
        <Button>Стать продавцом</Button>
      </div>
      <div className={cx.icons}>
        <Image width={20} src={vk} alt={'vk'} />
        <Image width={20} src={instagram} alt={'instagram'} />
        <Image width={20} src={facebook} alt={'facebook'} />
        <Image width={20} src={tg} alt={'tg'} />
      </div>
    </div>
  );
};

export default Footer;
