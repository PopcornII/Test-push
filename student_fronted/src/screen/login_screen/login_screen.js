
import { Button, Checkbox, Form, Input } from 'antd';
import './login_screen.css';
const Userlogin = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      return(
        <div className='login-form'> 
            <h1>Popcorn Dashboard</h1>
            <Form name="basic"
                labelCol={{span: 8,}}wrapperCol={{span:16,}}
                style={{maxWidth: 600,}}
                initialValues={{remember: true,}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >

                <Form.Item label="Username" name="username"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
                >
                <Input placeholder='username'/>
                </Form.Item>

                <Form.Item label="Password" name="password"
              
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
                >
                
                <Input.Password placeholder='password' />
                </Form.Item>

                <Form.Item
                name="remember"
                valuePropName="none"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
                </Form.Item>
            </Form>
        </div>
        );

    }
export default Userlogin;