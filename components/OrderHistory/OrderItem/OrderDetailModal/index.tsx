import Modal from '@/components/common/Modal';
import Heading from '@/components/common/Heading';
import ProductRow from '@/components/OrderHistory/OrderItem/OrderDetailModal/ProductRow';

interface IProps {
  visible: boolean;
  onClose: () => void;
}

const OrderDetailModal = ({ visible, onClose }: IProps) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <Heading tag="h2">подробности заказа</Heading>
      <ProductRow />
      <ProductRow />
      <ProductRow />
    </Modal>
  );
};

export default OrderDetailModal;
