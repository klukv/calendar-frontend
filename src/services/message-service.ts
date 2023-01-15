import { $authHost } from "./auth-service";

interface TMessage {
  text: string;
  yers: string;
  mounth: string;
  days: string;
  clock: string;
  minuts: string;
}

export const getAllReminders = async (user_id: number) => {
  const { data } = await $authHost.get(`MessageUser/${user_id}`);
  return data;
};
export const createReminder = async (message: TMessage, user_id: number) => {
  const { data } = await $authHost.post(`messageAdd/${user_id}`, {
    text: message.text,
    yers: message.yers,
    mounth: message.mounth,
    days: message.days,
    clock: message.clock,
    minuts: message.minuts,
  });
  return data;
};
export const getAllUsers = async () => {
  const { data } = await $authHost.get(`userList`);
  return data;
};
export const changeUsernameUser = async (user_id: number, username: string) => {
  const { data } = await $authHost.put(
    `userListChange/${user_id}?name=${username}`
  );
  return data;
};
export const changeEmailUser = async (user_id: number, email: string) => {
  const { data } = await $authHost.put(
    `userListChange/${user_id}?email=${email}`
  );
  return data;
};
export const deleteUser = async (user_id: number) => {
  const { data } = await $authHost.delete(`userListDelete/${user_id}`);
  return data;
};
