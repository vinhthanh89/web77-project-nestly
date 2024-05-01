import bcrypt from "bcryptjs";

import cloudinary from "../configs/cloudinary.js";
import User from "../models/user.model.js";
import {
  changePasswordValidate,
  editUserValidate,
  signUpValidate,
} from "../validations/user.validate.js";
import { validateData } from "../validations/validates.js";
import { signAccessToken, signRefreshToken } from "../utils/jwtoken.js";

//! Sign up
export const signUp = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    const avatar = req.file;

    const validate = validateData(
      { username, email, password, phone },
      signUpValidate
    );
    if (validate) {
      if (avatar) {
        cloudinary.uploader.destroy(avatar.filename);
      }

      return res.status(403).json({
        message: validate,
      });
    }

    const findUser = await User.findOne({ email });
    if (findUser) {
      if (avatar) {
        cloudinary.uploader.destroy(avatar.filename);
      }

      return res.status(403).json({
        message: "Email người dùng đã tồn tại",
      });
    }

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());

    await User.create({
      username,
      email,
      password: hashPassword,
      avatar:
        avatar?.path ||
        "https://res.cloudinary.com/du6uinlwy/image/upload/v1714406960/Nestly/Logo_white_fxhsab.png",
      phone,
    });

    return res.status(201).json({
      message: "Tạo người dùng thành công",
      user: {
        username,
        email,
        phone,
        avatar: avatar?.path || "",
      },
    });
  } catch (error) {
    console.log(error);
    if (avatar) {
      cloudinary.uploader.destroy(avatar.filename);
    }

    return res.status(500).json({
      message: error.message,
    });
  }
};

//! Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(403).json({
        message: "Email người dùng không tồn tại",
      });
    }

    const checkPassword = bcrypt.compareSync(password, findUser.password);
    if (!checkPassword) {
      return res.status(403).json({
        message: "Mật khẩu không chính xác",
      });
    }

    const payload = {
      _id: findUser._id,
      email: findUser.email,
      role: findUser.role,
    };

    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);

    const returnUser = {
      id: findUser._id,
      username: findUser.username,
      email: findUser.email,
      role: findUser.role,
      avatar: findUser.avatar,
      phone: findUser.phone,
    };

    return res.status(200).json({
      message: "Đăng nhập thành công",
      returnUser,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.find();

    return res.status(200).json({
      message: "Lấy dữ liệu user thành công",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    return res.status(200).json({
      message: "Lấy dữ liệu thành công",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const getPagingUser = async (req, res) => {
  try {
    const { pageSize, pageIndex } = req.query;

    const [user, totalDocument] = await Promise.all([
      User.find()
        .skip(pageSize * (pageIndex - 1))
        .limit(pageSize)
        .sort({ createAt: -1 }),
      User.countDocuments(),
    ]);

    const totalPage = Math.ceil(totalDocument / pageSize);

    return res.status(200).json({
      message: "Lấy dữ liệu người dùng thành công",
      user,
      totalPage,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const editUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { username, email, phone } = req.body;
    const avatar = req.file;

    const findUser = await User.findById(userId);
    if (!findUser) {
      if (avatar) {
        cloudinary.uploader.destroy(avatar.filename);
      }

      return res.status(404).json({
        message: "Không tìm thấy ID người dùng",
      });
    }

    if (email !== findUser.email) {
      const checkEmailExits = await User.findOne({ email });
      if (checkEmailExits) {
        if (avatar) {
          cloudinary.uploader.destroy(avatar.filename);
        }

        return res.status(401).json({
          message: "Email người dùng đã tồn tại",
        });
      }
    }

    const validate = validateData({ username, email, phone }, editUserValidate);
    if (validate) {
      if (avatar) {
        cloudinary.uploader.destroy(avatar.filename);
      }

      return res.status(401).json({
        message: validate,
      });
    }

    const userUpdated = await User.findByIdAndUpdate(
      findUser._id,
      {
        username,
        email,
        phone,
        avatar: avatar.path,
      },
      { new: true }
    );

    return res.status(201).json({
      message: "Cập nhật thông tin người dùng thành công",
      userUpdated,
    });
  } catch (error) {
    if (avatar) {
      cloudinary.uploader.destroy(avatar.filename);
    }
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const changeUserPassword = async (req, res) => {
  try {
    const userId = req.params.id;
    const { oldPassword, newPassword, confirmNewPassword } = req.body;

    const findUser = await User.findById(userId);
    if (!findUser) {
      return res.status(404).json({
        message: "Không tìm thấy ID người dùng",
      });
    }

    const comparePassword = bcrypt.compareSync(oldPassword, findUser.password);
    if (!comparePassword) {
      return res.status(401).json({
        message: "Mật khẩu người dùng không chính xác",
      });
    }

    const validate = validateData(
      { password: newPassword },
      changePasswordValidate
    );
    if (validate) {
      return res.status(401).json({
        message: validate,
      });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(401).json({
        message: "Xác nhận mật khẩu mới không trùng khớp",
      });
    }

    const hashNewPassword = bcrypt.hashSync(newPassword, bcrypt.genSaltSync());

    await User.findByIdAndUpdate(
      findUser._id,
      {
        password: hashNewPassword,
      },
      { new: true }
    );

    return res.status(201).json({
      message: "Cập nhập mật khẩu người dùng thành công",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const findUser = await User.findById(userId);
    if (!findUser) {
      return res.status(404).json({
        message: "không tìm thấy ID người dùng",
      });
    }

    await User.findByIdAndDelete(userId);

    return res.status(200).json({
      message: "Xóa người dùng thành công",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const findUser = async (req, res) => {
  try {
    const email = req.query.email;

    const findUser = await Room.findOne({ email });
    if (!findUser) {
      return res.status(404).json({
        message: "Email người dùng không tồn tại",
      });
    }

    return res.status(200).json({
      message: "Tìm thấy email người dùng thành công",
      findUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};
