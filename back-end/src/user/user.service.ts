import { db } from '../utils/db.server';

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

export const listUsers = async (): Promise<User[]> => {
  const usersList = await db.user.findMany({
    select: { id: true, firstName: true, lastName: true },
  });
  return usersList;
};

export const getUser = async (id: number): Promise<User | null> => {
  const user = await db.user.findUnique({
    where: { id },
    select: { id: true, firstName: true, lastName: true },
  });
  return user;
};
