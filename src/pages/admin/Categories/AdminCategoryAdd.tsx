import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface IFormInput {
    id: number,
    name: string,
}
interface IProps {
    onAdd: (cate: any) => void
}
const AdminCategoryAdd = (props: IProps) => {
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/categories')
        alert('thêm thành công')
    };


    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const handleClick = () => {
        toast.success("loadding", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true
        });
      };
 
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="name"
                    name="name"
                    rules={[{ required: true, message: 'vui lòng nhập name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button onClick={handleClick} type="primary" style={{ backgroundColor: 'red' }} htmlType="submit">
                        thêm mới
                    </Button>
                    <ToastContainer />
                </Form.Item>
            </Form>
        </div>
    )
}

export default AdminCategoryAdd