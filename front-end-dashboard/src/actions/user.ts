import { User } from '@/@types';

const url = `${process.env.API_URL}users`;

export async function listUsers(): Promise<User[]> {
  const res = await fetch(url, {
    method: 'GET',
  });
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return await res.json();
}

export async function getUser(id: number): Promise<User> {
  const res = await fetch(`${url}/${id}`, {
    method: 'GET',
  });
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return await res.json();
}
