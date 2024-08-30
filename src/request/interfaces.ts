import { request } from ".";
import { RegisterUser } from "../views/register/types";
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
