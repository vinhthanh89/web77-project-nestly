import { Modal, Input, Form, Button } from "antd";
import { useEffect, useState } from "react";
import { editUser, getUserById } from "../../services/user";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { saveUserToLocalStorage } from "../../utils/localstorage";
import FormItem from "antd/es/form/FormItem";

// eslint-disable-next-line react/prop-types
const ModalUser = ({ handleEdit }) => {
  const user = useSelector((state) => state.users.user);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [editAvatar, setEditAvatar] = useState(user.avatar);
  const [uploadFile , setUploadFile] = useState(null)

  const [form] = Form.useForm();

  useEffect(() => {
    return () => {
      editAvatar && URL.revokeObjectURL(editAvatar.preview);
    };
  }, [editAvatar]);

  useEffect(() => {
    const getUser = async () => {
      try {
        // eslint-disable-next-line react/prop-types
        const response = await getUserById(user.id);
        const { username, email, phone } = response.data.user;
        form.setFieldValue("username", username);
        form.setFieldValue("email", email);
        form.setFieldValue("phone", phone);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
    // eslint-disable-next-line react/prop-types
  }, [form, user.id]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    setUploadFile(e.target.files[0])
    file.preview = URL.createObjectURL(file);
    setEditAvatar(file.preview);
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async (values) => {
    try {
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 1000);
      const formData = new FormData()
      formData.append('avatar' , uploadFile)
      formData.append('oldAvatar' , user.avatar)
      formData.append('username' , values.username)
      formData.append('email' , values.email)
      formData.append('phone' , values.phone)

      const result = await editUser(user.id, formData);
      
      const userUpdated = result.data.userUpdated;
      const payload = {
        id: userUpdated._id,
        username: userUpdated.username,
        email: userUpdated.email,
        avatar: userUpdated.avatar,
        phone: userUpdated.phone,
        role: userUpdated.role,
      };
      handleEdit(payload);
      saveUserToLocalStorage(payload);
      toast.success("Cập nhật thông tin người dùng thành công");
    } catch (error) {
      console.log(error);
      toast.error("Cập nhật thông tin người dùng thất bại");
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
    setEditAvatar(user.avatar);
  };

  return (
    <>
      <Button onClick={showModal} className="pl-[1.4rem] pb-[2rem] font-black">
        Account
      </Button>
      <Modal
        className="w-[300px]"
        title="Edit user"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        confirmLoading={confirmLoading}
      >
        <Form form={form} name="basic" initialValues={{}} onFinish={handleOk}>
          <FormItem
          name='avatar'
          >
            <div className="m-auto w-[130px] h-[130px] rounded-[50%] relative overflow-hidden group cursor-pointer">
              <img className="w-full h-full rounded-[50%]" src={editAvatar} />
              <div className="w-full h-[50px] absolute right-0 bottom-[0] z-[2] bg-[lightgray] bg-opacity-50 hidden group-hover:block">
                <div className="hidden">
                  <input
                    type="file"
                    name="avatar"
                    id="file"
                    className="inputfile"
                    onChange={handlePreviewAvatar}
                  />
                </div>
                <label htmlFor="file" className="cursor-pointer">
                  <div className="text-[30px] absolute right-[50%] translate-x-[50%]">
                    📷
                  </div>
                </label>
              </div>
            </div>
          </FormItem>

          <Form.Item
            label="Username"
            name="username"
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
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone!",
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
