import { Product } from '@/@types';

const url = `${process.env.API_URL}products`;

export async function listProducts(): Promise<Product[]> {
  const res = await fetch(url, {
    method: 'GET',
  });
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return await res.json();
}

export async function getProduct(id: number): Promise<Product> {
  const res = await fetch(`${url}/${id}`, {
    method: 'GET',
  });
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return await res.json();
}

export async function createProduct(userId: number, product: Product) {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      product,
      userId,
    }),
  });
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return await res.json();
}
