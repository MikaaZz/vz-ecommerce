import { getProduct } from '@/actions/product';
import { ProductForm } from '@/components/products/product-form';

export default async function ProductsManagemente({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <ProductForm />
    </div>
  );
}
