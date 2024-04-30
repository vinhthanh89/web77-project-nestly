import { Modal, Input, Form, Button} from "antd";
import { useState } from "react";
const ModalUser = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <Button onClick={showModal} className="pl-[1.4rem] pb-[2rem] font-black">
        Account
      </Button>
      <Modal
        title={"Edit user"}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        confirmLoading={confirmLoading}
      >
        <Form name="basic" initialValues={{}} onFinish={handleOk} >
          <Form.Item
            label="Username"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>          
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              <p className="text-white">Save changes</p>
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ModalUser;
