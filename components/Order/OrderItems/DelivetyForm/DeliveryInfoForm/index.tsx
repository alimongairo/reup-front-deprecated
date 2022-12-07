import { Form, Input } from 'antd';

const DeliveryInfoForm = () => {
  return (
    <>
      <Form.Item
        name="region"
        rules={[{ required: true, message: 'Укажите регион' }]}
      >
        <Input placeholder="регион" size="large" />
      </Form.Item>

      <Form.Item
        name="street"
        rules={[{ required: true, message: 'Укажите адрес' }]}
      >
        <Input placeholder="адрес" size="large" />
      </Form.Item>

      <Form.Item
        name="postalCode"
        rules={[{ required: true, message: 'Укажите индекс' }]}
      >
        <Input placeholder="индекс" size="large" />
      </Form.Item>
    </>
  );
};

export default DeliveryInfoForm;
