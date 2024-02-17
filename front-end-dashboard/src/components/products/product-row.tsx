import Image from 'next/image';
import { TableCell, TableRow } from '../ui/table';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Product } from '@/@types';

export function ProductRow(product: Product) {
  return (
    <TableRow>
      <TableCell>
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src="/placeholder.svg"
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{product.name}</TableCell>
      <TableCell className="hidden md:table-cell">
        {product.description}
      </TableCell>
      <TableCell>R$ {product.price}</TableCell>
      <TableCell>
        <Link href={`/products/${product.id}`}>
          <Button className="ml-auto" size="sm">
            Edit
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
}
