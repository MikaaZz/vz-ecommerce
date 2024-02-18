import { db } from '../utils/db.server';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  userId?: number;
};

export const listProducts = async (): Promise<Product[]> => {
  try {
    const productsList = await db.product.findMany({
      select: { id: true, name: true, description: true, price: true },
    });
    return productsList;
  } catch (e) {
    throw Error(`Error in list products in API: ${e}`);
  }
};

export const getProduct = async (id: number): Promise<Product | null> => {
  try {
    const product = await db.product.findUnique({
      where: { id },
      select: { id: true, name: true, description: true, price: true },
    });
    return product;
  } catch (e) {
    throw Error(`Error in get product in API: ${e}`);
  }
};

export const createProduct = async ({
  product,
  userId,
}: {
  product: Omit<Product, 'id'>;
  userId: number;
}): Promise<Product> => {
  try {
    return await db.product.create({
      include: { user: true },
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        userId: userId,
      },
    });
  } catch (e) {
    throw Error(`Error in create product in API: ${e}`);
  }
};

export const updateProduct = async ({
  product,
  id,
}: {
  id: number;
  product: Omit<Product, 'id'>;
}): Promise<Product> => {
  try {
    return await db.product.update({
      where: { id: id },
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
      },
    });
  } catch (e) {
    throw Error(`Error in update product in API: ${e}`);
  }
};

export const deleteProduct = async (id: number): Promise<void> => {
  try {
    await db.product.delete({ where: { id } });
  } catch (e) {
    throw Error(`Error in delete product in API: ${e}`);
  }
};
