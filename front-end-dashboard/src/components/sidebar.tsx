'use client';
// Core Librarys
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Components
import { Button } from './ui/button';
// Assets
import { BellIcon } from '@/assets/Icons/BellIcon';
import { HomeIcon } from '@/assets/Icons/HomeIcon';
import { ShoppingCartIcon } from '@/assets/Icons/ShoppingCartIcon';
import { PackageIcon } from '@/assets/Icons/PackageIcon';
import { UsersIcon } from '@/assets/Icons/UsersIcon';
import { LineChartIcon } from '@/assets/Icons/LineChartIcon';
import { SettingsIcon } from '@/assets/Icons/SettingsIcon';
import { Package2Icon } from '@/assets/Icons/Package2Icon';

const itemsStyle = {
  active: `flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50`,
  disabled: `flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50`,
};

export function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="">VZ Original</span>
          </Link>
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className={
                pathname === '/' ? itemsStyle.active : itemsStyle.disabled
              }
              href="/"
            >
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <Link
              className={
                pathname === '/orders' ? itemsStyle.active : itemsStyle.disabled
              }
              href="orders"
            >
              <ShoppingCartIcon className="h-4 w-4" />
              Orders
            </Link>
            <Link
              className={
                pathname === '/products'
                  ? itemsStyle.active
                  : itemsStyle.disabled
              }
              href="products"
            >
              <PackageIcon className="h-4 w-4" />
              Products
            </Link>
            <Link
              className={
                pathname === '/customers'
                  ? itemsStyle.active
                  : itemsStyle.disabled
              }
              href="customers"
            >
              <UsersIcon className="h-4 w-4" />
              Customers
            </Link>
            <Link
              className={
                pathname === '/analytics'
                  ? itemsStyle.active
                  : itemsStyle.disabled
              }
              href="analytics"
            >
              <LineChartIcon className="h-4 w-4" />
              Analytics
            </Link>
            <Link
              className={
                pathname === '/settings'
                  ? itemsStyle.active
                  : itemsStyle.disabled
              }
              href="settings"
            >
              <SettingsIcon className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
