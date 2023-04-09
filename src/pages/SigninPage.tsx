import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const SigninPage = () => {
    const navigate = useNavigate()
    const onFinish = async (users: any) => {
        const email = users.email;
        const password = users.password;;
        try {
            const response = await fetch('http://localhost:3000/users?email=' + email + '&password=' + password);
            const user = await response.json();
            console.log(user[0]);

            if (user.length === 1) {
                // login successful, store user data in session storage or cookie
                const token = user[0].email;
                localStorage.setItem('user', token)
                const role = user[0].role;
                console.log(user[0].role);
                localStorage.setItem('role', role)
                alert('Đăng nhập thành công')
                if (role === 'admin') {
                    navigate('/admin')
                } else {
                    navigate('/');
                }
            } else {
                alert('thông tin bạn nhập chưa chính xác');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }

    };

    return (
        <div className='border border-[black] w-[700px] mx-auto my-[64px]'>
            <Form style={{ width: 500, margin: '0 auto' }}
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <h1 className='text-[24px] font-bold'>SIGN IN</h1>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Vui lòng nhập email của bạn!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} type='email' placeholder="email@gmail.com" />
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
                <Form.Item>
                    <Form.Item valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button style={{ marginRight: 12, backgroundColor: 'red' }} type="primary" htmlType="submit" className="login-form-button">
                        sign in
                    </Button>
                    Or <a style={{ marginLeft: 12 }} href="/signup">signup</a>
                </Form.Item>
            </Form>
        </div>
    );
}

export default SigninPage