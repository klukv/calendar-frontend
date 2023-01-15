import { $host } from "./auth-service";

export const signIn = async (username: string, password: string) => {
  const { data } = await $host.post("/api/auth/signin", {
    username,
    password,
  });
  localStorage.setItem("token", data.token);
  return data;
};
export const signUp = async (
  username: string,
  email: string,
  password: string,
  roles: string[]
) => {
  const { data } = await $host.post("/api/auth/signup", {
    username,
    email,
    password,
    roles,
  });
  return data;
};
