import joi from "joi";
// Username : string , min(8) , required
// Email : string , email , required
// Password : alphanum , min(8) , required
// Avatar : link hình ảnh ,
// Phone : number , required

const usernameValidate = joi
  .string()
  .alphanum()
  .required()
  .min(4)
  .max(30)
  .messages({
    "string.base": "Username phải là dạng string",
    "string.alphanum": "Username chỉ có thể là chữ hoặc số",
    "string.min": "Username tối thiểu 4 ký tự",
    "string.max": "Username tối đa 30 ký tự",
  });

const emailValidate = joi.string().email().required().messages({
  "string.base": "Email phải là dạng string",
  "string.email": "Email không đúng định dạng",
  "any.required": "Email là bắt buộc",
});

const passwordValidate = joi.string().required().min(8).max(30).messages({
  "string.base": "Password phải là dạng string",
  "string.min": "Password tối thiểu 8 ký tự",
  "string.max": "Password tối đa 30 ký tự",
  "any.required": "Password là bắt buộc",
});

const phoneValidate = joi.string().length(10).required().messages({
  "string.base": "Phone phải là dạng dữ liệu string",
  "string.length": "Số điện thoại phải đủ 10 chữ số",
  "any.required": "Phone là bắt buộc",
});

export const signUpValidate = joi.object({
  username: usernameValidate,
  email: emailValidate,
  password: passwordValidate,
  phone: phoneValidate,
});

export const editUserValidate = joi.object({
  username: usernameValidate,
  email: emailValidate,
  phone: phoneValidate,
});

export const changePasswordValidate = joi.object({
  password: passwordValidate,
});
