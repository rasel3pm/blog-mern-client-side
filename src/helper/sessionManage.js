class sessionManage {
  setToken(token) {
    return window.localStorage.setItem("token", token);
  }
  getToken() {
    return window.localStorage.getItem("token");
  }
  removeToken() {
    return window.localStorage.removeItem("token");
  }
}
export const { setToken, getToken, removeToken } = new sessionManage();
