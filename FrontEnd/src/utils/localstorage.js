const saveTokenToLocalStorage = (token) => {
  localStorage.setItem("accesstoken", token);
};

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("accesstoken");
};

const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("accesstoken");
  return token;
};

//! Lưu user vào local storage
const saveUserToLocalStorage = (user) => {
  //todo Chuyển object sang string
  localStorage.setItem("user", JSON.stringify(user));
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

const getUserFromLocalStorage = () => {
  const userString = localStorage.getItem("user");
  //todo Vì đang ở dạng string khi ta save user, nên phải parse lại thành object như sau
  if (!userString) {
    return {}; //! Khi chưa đăng nhập, thường dữ liệu chưa có nên phải check
  }
  
  const user = JSON.parse(userString);
  return user;
};


export {
  saveTokenToLocalStorage,
  removeTokenFromLocalStorage,
  getTokenFromLocalStorage,
  saveUserToLocalStorage,
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
};
