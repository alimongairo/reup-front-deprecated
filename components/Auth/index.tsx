import { Form, Input } from 'antd';

const AuthComponent = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item name="email" label="Email">
        <Input placeholder="Input email..." />
      </Form.Item>
      <Form.Item name="password" label="Password">
        <Input placeholder="Input password..." type="password" />
      </Form.Item>
    </Form>
  );
};

export default AuthComponent;
