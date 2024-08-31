import { useEffect, useMemo, useState } from "react";
import { FriendshipSearchResult, SearchFriend } from "./types";
import Table, { ColumnsType } from "antd/es/table";
import { useForm } from "antd/es/form/Form";
import { Button, Form, Input, message } from "antd";
import "./index.css";
import { friendshipList } from "../../request/interfaces";

export function Friendship() {
  const [friendRes, setFriendRes] = useState<FriendshipSearchResult[]>([]);

  const columns: ColumnsType<FriendshipSearchResult> = useMemo(
    () => [
      {
        title: "昵称",
        dataIndex: "nickName",
      },
      {
        title: "头像",
        dataIndex: "avatar",
        render: (_, record) => {
          return (
            <div>
              <img src={record.avatar} />
            </div>
          );
        },
      },
      {
        title: "邮箱",
        dataIndex: "email",
      },
      {
        title: "操作",
        render: () => {
          return (
            <div>
              <a href="#">聊天</a>
            </div>
          );
        },
      },
    ],
    []
  );

  const [form] = useForm();
  const searchFriend = async (values: SearchFriend) => {
    try {
      const res = await friendshipList(values.name || "");

      if (res.status === 201 || res.status === 200) {
        setFriendRes(
          res.data.map((item: FriendshipSearchResult) => {
            return {
              ...item,
              key: item.id,
            };
          })
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      message.error(e.response?.data?.message || "系统繁忙，请稍后再试");
    }
  };

  //页面首次渲染时调用一次
  useEffect(() => {
    searchFriend({
      name: form.getFieldValue("name"),
    });
  }, []);

  return (
    <div id="friendship-container">
      <div className="friendship-form">
        <Form
          form={form}
          onFinish={searchFriend}
          name="search"
          layout="inline"
          colon={false}
        >
          <Form.Item label="好友名称" name="name">
            <Input />
          </Form.Item>

          <Form.Item label=" ">
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="friendship-table">
        <Table
          columns={columns}
          dataSource={friendRes}
          style={{ width: "1000px" }}
        />
      </div>
    </div>
  );
}
