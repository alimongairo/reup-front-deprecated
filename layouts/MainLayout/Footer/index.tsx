import Image from 'next/image';
import { useWindowSize } from '@/hooks/useWindow';

import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';

import facebook from '@/static/icons/facebook.svg';
import instagram from '@/static/icons/instagram.svg';
import tg from '@/static/icons/tg.svg';
import vk from '@/static/icons/vk.svg';
import r from '@/static/icons/R_icons.svg';
import shape from '@/static/icons/icons_shape.svg';
import basket from '@/static/icons/basketFooter.svg';
import liked from '@/static/icons/likedFooter.svg';
import personalAccount from '@/static/icons/personalAccount.svg';

import cx from './index.module.scss';
import { spawn } from 'child_process';


const Footer = () => {

  const windowSize = useWindowSize();

  return (
    <div className={cx.wrapper}>
      {windowSize.width <= 586 ? (
        <div className={cx.content_flex_media_screen_mobile}>
          <div className={cx.content_flex_media_screen}>
              <div className={cx.content}>
                <Heading tag="h2">REUP</Heading>
                <div className={cx.text}>
                  <Text size="thin">Написать в поддержку</Text>
                  <Text size="thin">FAQ</Text>
                  <Text size="thin">Публичная оферта</Text>
                </div>
                
              </div>
              <div className={cx.icons}>
                <Image width={25} src={vk} alt={'vk'} />
                <Image width={25} src={tg} alt={'tg'} />
                <Image width={25} src={instagram} alt={'instagram'} />
                <Image width={25} src={facebook} alt={'facebook'} />
              </div>
          </div>
          
          <Button className={cx.btnBuy}>стать продавцом</Button>

          <div className={cx.iconsIphone}>
              <Image width={50} src={r} alt='R'/>
              <Image width={50} src={shape} alt='shape'/>
              <Image width={50} src={basket} alt='basket'/>
              <Image width={50} src={liked} alt='liked'/>
              <Image width={50} src={personalAccount} alt='personalAccount'/>
          </div>

        </div>
      ) : (
        <>
          <div className={cx.content}>
            <Heading tag="h2">REUP</Heading>
            <div className={cx.text}>
              <Text size="thin">Написать в поддержку</Text>
              <Text size="thin">FAQ</Text>
              <Text size="thin">Публичная оферта</Text>
              <Text size="thin">{windowSize.width}</Text>
              <Text size="thin">{windowSize.height}</Text>
            </div>
            <Button>Стать продавцом</Button>
          </div>
          <div className={cx.icons}>
            <Image width={20} src={vk} alt={'vk'} />
            <Image width={20} src={tg} alt={'tg'} />
            <Image width={20} src={instagram} alt={'instagram'} />
            <Image width={20} src={facebook} alt={'facebook'} />
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
