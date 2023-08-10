import { useNavigate, useParams } from "react-router-dom"
import { Form, Input, Button, message } from "antd"
import Iproduct from "../../type/product"
import { useGetproductByidQuery, useUpdateproductMutation } from "../../services/product"

const AdminProductUpdate = () => {
    const { id }: number | any = useParams()
    const navigate = useNavigate()
    const { data: product, isLoading, error } = useGetproductByidQuery(id)
    const [update, result] = useUpdateproductMutation()
    const onFinish = (values: Iproduct) => {
        const dataUpdate: any = {
            id: id,
            name: values.name,
            price: values.price,
            description: values.description,
        }
        update(dataUpdate);
        message.success('sửa thành công')
        navigate('/admin/products')
    };
    const initial = {
        name: product?.name,
        price: product?.price,
        description: product?.description
    }
    if (!product) return null;
    return (
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
                <Button className='bg-black text-white' htmlType="submit">
                    create
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AdminProductUpdate