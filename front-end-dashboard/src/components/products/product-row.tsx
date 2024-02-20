import Link from 'next/link';
import Image from 'next/image';

import { Button } from '../ui/button';
import { TableCell, TableRow } from '../ui/table';

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
      <TableCell className="flex items-center gap-2 justify-end">
        <Link href={`/products/${product.id}`}>
          <Button className="ml-auto" size="sm">
            Edit
          </Button>
        </Link>

        <Button className=" bg-red-800" size="sm" disabled>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
