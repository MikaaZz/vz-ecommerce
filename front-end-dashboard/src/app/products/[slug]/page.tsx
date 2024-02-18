import { getProduct } from '@/actions/product';
import { ProductForm } from '@/components/products/product-form';

export default async function ProductsManagemente({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);
  return (
    <div>{product ? <ProductForm product={product} /> : <ProductForm />}</div>
  );
}
