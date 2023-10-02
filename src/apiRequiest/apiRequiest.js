import axios from "axios";
import { ErrorAlart, SuccessAlart } from "../helper/formValidation";
import { setToken } from "../helper/sessionManage";

const baseURL = "https://serversideblog.vercel.app/api/v1";

export const CreatePostRequiest = (title, author, content, image) => {
  const data = { title: title, author: author, content: content, image: image };
  let URL = baseURL + "/create";
  return axios.post(URL, data).then((res) => {
    if (res.status === 200) {
      SuccessAlart("Post Create Success");
    } else {
      ErrorAlart("Something went wrong");
      return false;
    }
  });
};

export const LoginRequiest = (email, password) => {
  const data = { email: email, password: password };
  let URL = baseURL + "/login";
  return axios
    .post(URL, data)
    .then((res) => {
      if (res.status === 200) {
        SuccessAlart("Login Success");
        setToken(res.data.token);
        return true;
      }
    })
    .catch((e) => {
      ErrorAlart("Wrong email or password");
      return false;
    });
};

export const RegisterRequiest = (name, email, password) => {
  const data = { name: name, email: email, password: password };
  let URL = baseURL + "/register";
  return axios
    .post(URL, data)
    .then((res) => {
      if (res.status === 200) {
        SuccessAlart("Account created");
        return true;
      }
    })
    .catch((e) => {
      ErrorAlart("Something went wrong");
      return false;
    });
};
