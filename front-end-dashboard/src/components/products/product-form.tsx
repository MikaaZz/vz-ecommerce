'use client';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { useForm } from 'react-hook-form';

import {
  createProduct,
  handleProductForm,
  updateProduct,
} from '@/actions/product';

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/JoMcp2SADHs
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Product } from '@/@types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProductSchema, productSchema } from '@/lib/forms-schema/product';

export function ProductForm({ product }: { product?: Product }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: product?.name ?? '',
      description: product?.description ?? '',
      price: product?.price.toString() ?? '',
    },
  });

  const handleProductRegistrationData = async (data: ProductSchema) => {
    await handleProductForm({ data, product });
  };
  return (
    <Card className="max-w-[900px] mx-auto">
      <CardHeader className="flex flex-row space-y-0 items-start gap-2">
        <div className="grid gap-1">
          <CardTitle>
            {product ? `Edit ${product.name}` : 'Creating new'}
          </CardTitle>
          <CardDescription>Update product details and images</CardDescription>
        </div>
        {product && (
          <div className="text-3xl ml-auto font-bold">R$ {product.price}</div>
        )}
      </CardHeader>
      <CardContent>
        <form
          className="grid gap-4 md:gap-6"
          onSubmit={handleSubmit(handleProductRegistrationData)}
        >
          <div className="grid gap-2">
            <Label className="text-base" htmlFor="name">
              Product Name
            </Label>
            <Input
              className="w-full"
              placeholder="Enter product name"
              {...register('name')}
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-base" htmlFor="description">
              Description
            </Label>
            <Textarea
              className="w-full"
              placeholder="Enter product description"
              {...register('description')}
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-base" htmlFor="price">
              Price
            </Label>
            <Input
              className="w-full"
              placeholder="Enter product price"
              type="number"
              {...register('price')}
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-base" htmlFor="images">
              Product Images
            </Label>
            <div className="relative">
              <Button className="w-full" variant="outline">
                Choose Images
              </Button>
              <input
                accept="image/*"
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                id="images"
                multiple
                type="file"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row">
            <Button size="lg">Save Changes</Button>
            <Button size="lg" variant="outline">
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
