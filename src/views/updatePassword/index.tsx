import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { layout1 } from "./constants";
import { type UpdatePassword } from "./types";

export function UpdatePassword() {
  const [form] = useForm();
  const navigate = useNavigate();

  const onFinish = async (values: UpdatePassword) => {
    console.log(values);
  };

  const sendCaptcha = async function () {
    console.log("send captcha");
  };

  return (
    <div id="updatePassword-container">
      <h1>聊天室</h1>
      <Form
        form={form}
        {...layout1}
        onFinish={onFinish}
        colon={false}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            { required: true, message: "请输入邮箱!" },
            { type: "email", message: "请输入合法邮箱地址!" },
          ]}
        >
          <Input />
        </Form.Item>

        <div className="captcha-wrapper">
          <Form.Item
            label="验证码"
            name="captcha"
            rules={[{ required: true, message: "请输入验证码!" }]}
          >
            <Input />
          </Form.Item>
          <Button className="btn1" type="primary" onClick={sendCaptcha}>
            发送验证码
          </Button>
        </div>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="确认密码"
          name="confirmPassword"
          rules={[{ required: true, message: "请输入确认密码!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...layout1} label=" ">
          <Button className="btn" type="primary" htmlType="submit">
            修改
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
