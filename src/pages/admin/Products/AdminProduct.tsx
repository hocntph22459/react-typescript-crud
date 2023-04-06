import { Iproduct } from '../../../interfaces/product'
import { Button, Space, Table } from 'antd'
interface Iprops {
  products: Iproduct[],
  onRemove: (id: number) => void
}
// interface Icolumns{
//   key: string | number,
//   title: string,
//   dataIndex: string,
// }

const AdminProduct = (props: Iprops) => {
    const handleRemove = (id: number) => {
    props.onRemove(id)
  }
  const columns:any = [
    {
      title: 'productName',
      dataIndex: 'name',
      key: 'productName'
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price'
    },
    {
      key: 'image',
      title: 'image',
      dataIndex: 'image',
      render: (image:any) => <img src={image} alt="image" style={{width: '100px'}}/>
    },
    {
      key: 'description',
      title: 'description',
      dataIndex: 'description',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (item:any) => (
        <Space size="middle">
          <a href={`http://localhost:5173/admin/product/${item.key}/update`}>update</a>
          <Button type='primary' style={{backgroundColor:'red'}} onClick={() => handleRemove(item.key)}>removo</Button>
        </Space>
      ),
      // render: (item:any) => <Button type='primary' style={{backgroundColor:'red'}} onClick={() => handleRemove(item.key)}>removo</Button>,
    },
  ];

  const data = props.products.map(item => {
    return {
      key: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description
    }
  })

  return (
    <div>
      <a href="/admin/product/add">Thêm Mới</a>
      <Table style={{ width: 1000, margin: '0 auto' }}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 4, showQuickJumper: true }}
      />
    </div>
  )
}

export default AdminProduct