import { Icategory } from '../../../interfaces/Category'
import { Button, Space, Table } from 'antd'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Iprops {
  cate: Icategory[],
  onRemove: (id: number) => void
}

const AdminCategory = (props: Iprops) => {
  const handleRemove = (id: number) => {
    props.onRemove(id)
    toast.success("xóa thành công", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true
    });
  }
  const columns: any = [
    {
      title: 'id',
      dataIndex: 'key',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (item: any) => (
        <Space size="middle">
          <a href={`http://localhost:5173/admin/categories/${item.key}/update`}>update</a>
          <Button type='primary' style={{ backgroundColor: 'red' }} onClick={() => handleRemove(item.key)}>removo</Button>
          <ToastContainer />
        </Space>
      ),
    },
  ];

  const data = props.cate.map(item => {
    return {
      key: item.id,
      name: item.name
    }
  })

  return (
    <div>
      <a href="/admin/categories/add">Thêm Mới</a>
      <Table style={{ width: 1000, margin: '0 auto' }}
        columns={columns}
        dataSource={data}
      // pagination={{ pageSize: 2, showQuickJumper: true }}
      />
    </div>
  )
}

export default AdminCategory