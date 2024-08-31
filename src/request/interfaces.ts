import { request } from ".";
import { RegisterUser } from "../views/register/types";
import { UserInfo } from "../views/updateInfo/types";
import { UpdatePassword } from "../views/updatePassword/types";

export async function login(userName: string, password: string) {
  return await request.post("/user/login", {
    userName,
    password,
  });
}

export async function registerCaptcha(email: string) {
  return await request.get("/user/register-captcha", {
    params: {
      address: email,
    },
  });
}

export async function register(registerUser: RegisterUser) {
  return await request.post("/user/register", registerUser);
}

export async function updatePasswordCaptcha(email: string) {
  return await request.get("/user/update_password/captcha", {
    params: {
      address: email,
    },
  });
}

export async function updatePassword(data: UpdatePassword) {
  return await request.post("/user/update_password", data);
}

export async function getUserInfo() {
  return await request.get("/user/info");
}

export async function updateInfo(data: UserInfo) {
  return await request.post("/user/update", data);
}

export async function updateUserInfoCaptcha(email: string) {
  return await request.get("/user/update/captcha", {
    params: {
      address: email,
    },
  });
}

export async function presignedUrl(fileName: string) {
  return request.get(`/minio/presignedUrl?name=${fileName}`);
}

export async function friendshipList(name?: string) {
  return request.get(`/user/list?name=${name || ""}`);
}

export async function chatroomList(name: string) {
  return request.get(`/chatroom/list?name=${name || ""}`);
}
