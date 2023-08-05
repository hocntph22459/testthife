import { Table, Empty } from 'antd';
import { useDeleteProductMutation, useGetProductsQuery } from '../services/product';
import Iproduct from '../types/product.type';
import {Link} from "react-router-dom"
const AdminProduct = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [removeProduct, result] = useDeleteProductMutation();
  const HandleRemoveUser = (id: any) => {
    removeProduct(id)
  };
  const columns = [
    {
      title: 'stt',
      dataIndex: 'index',
      key: 'index'
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: "Hành động",
      render: (item: any) => <>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => HandleRemoveUser(item.id)} >Remove</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"><Link to={`/admin/products/${item.id}/update`}>Edit</Link></button>
      </> 
    },
  ];

  const data = products?.map((item: Iproduct, index: number) => {
    return {
      index: index + 1,
      key: item.id,
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
    }
  })
  if (data?.length == 0)
    return (
      <Empty description={false} />
    )
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={{ pageSize: 8, showQuickJumper: true }}
      />
    </>
  );
}

export default AdminProduct