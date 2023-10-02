import Toastify from "toastify-js";
class formValidation {
  IsEmpty(value) {
    return value.length === 0;
  }
  SuccessAlart(msg) {
    Toastify({
      text: `${msg}`,
      duration: 3000,
      className: "info",
      position: "center",
    }).showToast();
  }
  ErrorAlart(msg) {
    Toastify({
      text: `${msg}`,
      duration: 3000,
      className: "danger",
      position: "center",
    }).showToast();
  }
}

export const { IsEmpty, SuccessAlart, ErrorAlart } = new formValidation();
