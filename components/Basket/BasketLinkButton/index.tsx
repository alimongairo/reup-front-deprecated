import Link from 'next/link';
import { EPagesRoutes } from '@/constants/router';
import basketIcon from '@/static/icons/miniBasket.svg';
import Image from 'next/image';

const BasketLinkButton = () => {
  return (
    <div>
      <Link href={EPagesRoutes.Basket}>
        <Image src={basketIcon} alt="basketIcon" />
      </Link>
    </div>
  );
};

export default BasketLinkButton;
