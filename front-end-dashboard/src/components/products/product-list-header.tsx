import { TableHead, TableHeader, TableRow } from '../ui/table';

export function ProductListHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[80px]">Image</TableHead>
        <TableHead className="max-w-[150px]">Name</TableHead>
        <TableHead className="hidden md:table-cell">Description</TableHead>
        <TableHead>Price</TableHead>
      </TableRow>
    </TableHeader>
  );
}
