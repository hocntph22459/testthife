import {Link} from "react-router-dom"
import { useGetproductsQuery, useRemoveProductMutation } from '../../services/product'
import { Button, Table,message } from 'antd'
import Iproduct from '../../type/product'


const AdminProduct = () => {
  const { data: products, isLoading, error } = useGetproductsQuery()
  const [remove,result] = useRemoveProductMutation()
  const HandleRemove = (id: number) => {
    remove(id)
    message.success('xóa thành công')
  }
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Action',
      render: (item: Iproduct) => <>
        <Button onClick={() => HandleRemove(item.id)}>xóa</Button>
        <Button><Link to={`/admin/products/${item.id}/update`}>edit</Link></Button>
      </>,
    },
  ];

  const data = products?.map((item: Iproduct) => {
    return {
      id: item.id,
      key: item.key,
      name: item.name,
      price: item.price,
      description: item.description
    }
  })
  return (
    <Table
      columns={columns}
      pagination={{ pageSize: 10 }}
      dataSource={data}
    />
  )
}

export default AdminProduct