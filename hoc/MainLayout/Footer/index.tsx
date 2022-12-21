import Image from 'next/image';

import vk from '@/static/icons/vk.svg';
import tg from '@/static/icons/tg.svg';
import instagram from '@/static/icons/instagram.svg';
import facebook from '@/static/icons/facebook.svg';

import cx from './index.module.scss';

const Footer = () => {
  return (
    <div className={cx.wrapper}>
      <h1>REUP</h1>
      <div>
        {' '}
        <div>
          <ul>
            <li>Новинки</li>
            <li>Выбор REUP</li>
            <li>Локальные бренды</li>
            <li>Винтажные магазины</li>
            <li>Ювелирка</li>
            <li>Частные предложения (Вторые ручки)</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Служба поддержки клиентов</li>
            <li>Вся юр. информация</li>
          </ul>
          <div className={cx.media}>
            <div>
              <Image src={vk} alt="vk" />
            </div>
            <div>
              <Image src={tg} alt="tg" />
            </div>
            <div>
              <Image src={instagram} alt="instagram" />
            </div>
            <div>
              <Image src={facebook} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
