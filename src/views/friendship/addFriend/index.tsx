import { Form, Input, message, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { AddFriend, AddFriendModalProps } from "./types";
import { layout } from "./constants";
import { friendAdd } from "../../../request/interfaces";

export function AddFriendModal(props: AddFriendModalProps) {
  const [form] = useForm<AddFriend>();

  const handleOk = async function () {
    await form.validateFields();

    const values = form.getFieldsValue();

    try {
      const res = await friendAdd(values);

      if (res.status === 201 || res.status === 200) {
        message.success("好友申请已发送");
        form.resetFields();
        props.handleClose();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      message.error(e.response?.data?.message || "系统繁忙，请稍后再试");
    }
  };

  return (
    <Modal
      title="添加好友"
      open={props.isOpen}
      onOk={handleOk}
      onCancel={() => props.handleClose()}
      okText={"发送好友请求"}
      cancelText={"取消"}
    >
      <Form form={form} colon={false} {...layout}>
        <Form.Item
          label="用户名"
          name="userName"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="添加理由"
          name="sayHello"
          rules={[{ required: true, message: "请输入添加理由!" }]}
        >
          <TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
}
