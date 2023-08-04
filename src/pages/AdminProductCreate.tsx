import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAddProductMutation } from '../services/product';
type FormType = {
  name: string;
  price: string;
  description: string;
};
const AdminProductCreate = () => {
  const [addProduct, result] = useAddProductMutation();
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    addProduct(values);
    navigate('/admin/products')
  };
  return (
    <>
      <h1>create product</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="price"
          name="price"
          rules={[{ required: true, message: 'Please input your price!' }]}
        >
          <Input type='number' />
        </Form.Item>
        <Form.Item
          label="description"
          name="description"
          rules={[{ required: true, message: 'Please input your description!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default AdminProductCreate