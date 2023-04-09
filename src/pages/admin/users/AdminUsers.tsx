import { Button, Space, Table } from 'antd'
import { Iusers } from '../../../interfaces/users'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Iprops {
  user: Iusers[],
  onRemove: (id: number) => void
}

const AdminUsers = (props: Iprops) => {
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
      title: 'username',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email'
    },
    ,
    {
      title: 'password',
      dataIndex: 'password',
      key: 'password'
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (item: any) => (
        <Space size="middle">
          {localStorage.getItem('user') === 'admin@gmail.com' ? <Button disabled style={{ backgroundColor: 'red' }} onClick={() => handleRemove(item.key)}>removo</Button> :<Button type='primary' style={{ backgroundColor: 'red' }} onClick={() => handleRemove(item.key)}>removo</Button>}
          <ToastContainer />
        </Space>
      ),
    },
  ];

  const data = props.user.map(item => {
    return {
      key: item.id,
      username: item.username,
      email: item.email,
      password: item.password,
    }
  })

  return (
    <div>
      <Table style={{ width: 1000, margin: '0 auto' }}
        columns={columns}
        dataSource={data}
      // pagination={{ pageSize: 2, showQuickJumper: true }}
      />
    </div>
  )
}

export default AdminUsers