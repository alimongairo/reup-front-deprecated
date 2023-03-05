import Button from '@/components/common/Button';
import { TUserItem } from '@/store/user/type';
import { decoratePhoneNumber } from '@/helpers/decoratePhoneNumber';
import cx from './index.module.scss';

interface IProps {
  user: TUserItem;
}

const UserDeliveryInfo = ({ user }: IProps) => {
  return (
    <>
      <div className={cx.userData}>
        <div>
          {user.surname} {user.name}
        </div>
        <div>{decoratePhoneNumber(user.phone)}</div>
        <div>{user.address.street}</div>
        <div>
          {user.address.region}, {user.address.postalCode}
        </div>
      </div>
      <div>
        <Button>
          изменить адрес <sup>+</sup>
        </Button>
      </div>
    </>
  );
};

export default UserDeliveryInfo;
