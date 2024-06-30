import { request } from "@src/services/firebaseServer";

export const fetchWorks = async () => {
  const response = await request({
    url: '/works.json',
    method: 'GET',
  });
  return response;
}
