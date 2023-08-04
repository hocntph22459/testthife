import { Button, Form, Input } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductQuery, useUpdateProductMutation } from '../services/product';
type FormType = {
  name: string;
  price: string;
  description: string;
};
const AdminProductUpdate = () => {
  const {id}:number | any = useParams()
  const { data: product, isLoading, error } = useGetProductQuery(id);
  const [updateProduct, result] = useUpdateProductMutation();
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    const dataUpdate = {
      id:id,
      name:values.name,
      price:values.price,
      description:values.description
    }
    updateProduct(dataUpdate)
    navigate('/admin/products')
  };
  const initial = {
    id: product?.id,
    name: product?.name,
    price: product?.price,
    description:product?.description
  };
  return (
    <>
      <h1>Update product</h1>
      <Form 
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={initial}
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

export default AdminProductUpdate