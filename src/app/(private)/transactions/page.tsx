'use client';
import { Button } from '@heroui/react';
import { Search } from 'lucide-react';
import TransactionTable from './transaction-table';
import { DateRangePicker, Input } from '@heroui/react';
import AddTransaction from './_components/add-transactions';
export default function Transactions() {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold">Transactions</p>
          <p className="text-sm">Easily track your transaction history</p>
        </div>
        <AddTransaction />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between flex-wrap">
          <div className="w-full">
            <Input
              className="max-w-62"
              aria-label="Search"
              labelPlacement="outside"
              placeholder="Search..."
              startContent={
                <Search className="text-base text-default-400 pointer-events-none flex-shrink-0" />
              }
              type="search"
              radius="full"
            />
          </div>
          <div className="flex gap-4 w-full justify-end">
            <DateRangePicker radius="full" className="max-w-62" />

            <Button radius="full">Export csv</Button>
          </div>
        </div>
        <TransactionTable />
      </div>
    </section>
  );
}
