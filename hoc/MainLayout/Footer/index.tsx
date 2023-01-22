import Image from 'next/image';
import Text from '@/components/common/Text';

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
            <li>
              <Text>Новинки</Text>
            </li>
            <li>
              <Text>Выбор REUP</Text>
            </li>
            <li>
              <Text>Локальные бренды</Text>
            </li>
            <li>
              <Text>Винтажные магазины</Text>
            </li>
            <li>
              <Text>Ювелирка</Text>
            </li>
            <li>
              <Text>Частные предложения (Вторые ручки)</Text>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Text>Служба поддержки клиентов</Text>
            </li>
            <li>
              <Text>Вся юр. информация</Text>
            </li>
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
