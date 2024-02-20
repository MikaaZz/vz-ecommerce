'use server';

import { Product } from '@/@types';
import { ProductSchema } from '@/lib/forms-schema/product';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

// const url = `${process.env.API_URL}products`;
const url = `http://localhost:8000/api/products`;

export async function listProducts(): Promise<Product[]> {
  const res = await fetch(url, {
    method: 'GET',
    next: { tags: ['products'] },
  });
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return await res.json();
}

export async function getProduct(id: string): Promise<Product | undefined> {
  if (id === 'new') return;
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
    mode: 'cors',
    next: { tags: ['products'] },
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        id: userId,
      },
      product: {
        name: product.name,
        description: product.description,
        price: product.price,
      },
    }),
  });
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return await res.json();
}

export async function updateProduct(product: Product) {
  const res = await fetch(`${url}/${product.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    next: { tags: ['products'] },
    body: JSON.stringify({
      name: product.name,
      description: product.description,
      price: product.price,
    }),
  });
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return await res.json();
}

type ProductFormProps = { data: ProductSchema; product?: Product };

export async function handleProductForm({ data, product }: ProductFormProps) {
  const { name, description, price } = data;
  const newProduct = {
    id: product?.id ?? undefined,
    name,
    description,
    price: parseInt(price),
  };

  product
    ? await updateProduct(newProduct)
    : await createProduct(1, newProduct);

  revalidateTag('products');
  redirect('/products');
}
