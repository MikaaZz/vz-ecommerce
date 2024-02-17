'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';

import { Package2Icon } from '@/assets/Icons/Package2Icon';
import { usePathname } from 'next/navigation';
export function Topbar() {
  const pathname = usePathname();
  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <Link className="lg:hidden" href="#">
        <Package2Icon className="h-6 w-6" />
        <span className="sr-only">Home</span>
      </Link>
      <div className="flex-1">
        <h1 className="font-semibold text-lg capitalize">
          {pathname === '/' ? 'Home' : pathname.split('/')}
        </h1>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="rounded-full" size="icon" variant="ghost">
            <Image
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: '32/32',
                objectFit: 'cover',
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
