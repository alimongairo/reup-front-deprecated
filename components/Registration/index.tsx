import { Button, Form, Input } from 'antd';

const RegistrationComponent = () => {
  const [form] = Form.useForm();

  const onFinish = (values: { email: string; password: string }) => {
    console.log(values);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input placeholder="Input your email..." type="email" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input placeholder="Input your password..." type="password" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Registration
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationComponent;
