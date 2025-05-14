
// ================== LOGIN MANAGER ==================

const ADMIN_USERNAME = "baobao01";
const ADMIN_PASSWORD = "motyeu01."; // có thể mã hóa base64 nếu muốn giấu thêm

function login(username, password) {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    localStorage.setItem("isAdmin", "true");
    toast("Đăng nhập thành công!");
    location.reload();
  } else {
    toast("Sai tài khoản hoặc mật khẩu!");
  }
}

function logout() {
  localStorage.removeItem("isAdmin");
  toast("Đã đăng xuất!");
  location.reload();
}

function isAdmin() {
  return localStorage.getItem("isAdmin") === "true";
}

function requireAdminAccess(callback) {
  if (isAdmin()) {
    callback();
  } else {
    toast("Bạn không có quyền truy cập!");
  }
}
