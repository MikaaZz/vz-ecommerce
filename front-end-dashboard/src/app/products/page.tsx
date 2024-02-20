import { Button } from '@/components/ui/button';
import { TableBody, Table } from '@/components/ui/table';
import { ProductRow } from '@/components/products/product-row';
import { ProductListHeader } from '@/components/products/product-list-header';
import { listProducts } from '@/actions/product';
import Link from 'next/link';

export default async function Products() {
  const products = await listProducts();
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg md:text-2xl">Products</h1>
        <Link href={'/products/new'}>
          <Button className="ml-auto" size="sm">
            Add product
          </Button>
        </Link>
      </div>
      <div className="border shadow-sm rounded-lg">
        <Table>
          <ProductListHeader />
          <TableBody>
            {products.map((product) => {
              return <ProductRow key={product.id} {...product} />;
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
