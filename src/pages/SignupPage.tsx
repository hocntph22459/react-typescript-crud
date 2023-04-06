import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Signup } from '../api/users';
import { useNavigate } from 'react-router-dom';
const SignupPage = () => {
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        Signup(values).then(() => alert('đăng ký thành công'))
        .then(()=>navigate('/signin'))
        .catch(() => console.log('lỗi')
        )
    };
    return (
        <div className='border border-[black] w-[700px] mx-auto my-[64px]'>
            <Form style={{ width: 500, margin: '0 auto' }}
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <h1 className='text-[24px] font-bold'>SIGN UP</h1>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Vui lòng nhập Tên người dùng của bạn!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Vui lòng nhập email của bạn!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} type='email' placeholder="text@gmail.com" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Vui lòng nhập Mật khẩu của bạn!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu xác nhận của bạn!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="confirmpassword"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button style={{marginRight:12, backgroundColor:'red'}} type="primary" htmlType="submit" className="login-form-button">
                        Sign up
                    </Button>
                    Or <a style={{marginLeft:12}} href="/signin">signin</a>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignupPage