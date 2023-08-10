import { useNavigate } from "react-router-dom"
import { Form, Input, Button, message } from "antd"
import { useCreateProductMutation } from '../../services/product'
import Iproduct from "../../type/product"
type Props = {}

const AdminProductCreate = (props: Props) => {
    const [add, result] = useCreateProductMutation()
    const navigate = useNavigate()
    const onFinish = (values: Iproduct) => {
        add(values);
        message.success('thêm thành công')
        navigate('/admin/products')
    };
    return (
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
                <Button className='bg-black text-white' htmlType="submit">
                    create
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AdminProductCreate