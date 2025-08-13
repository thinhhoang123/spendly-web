'use client';
import { Button } from '@heroui/react';
import { Plus, Search } from 'lucide-react';
import TransactionTable from './transaction-table';
import { DateRangePicker, Input, Select, SelectItem } from '@heroui/react';
export const animals = [
  { key: 'cat', label: 'Cat' },
  { key: 'dog', label: 'Dog' },
  { key: 'elephant', label: 'Elephant' },
  { key: 'lion', label: 'Lion' },
  { key: 'tiger', label: 'Tiger' },
  { key: 'giraffe', label: 'Giraffe' },
  { key: 'dolphin', label: 'Dolphin' },
  { key: 'penguin', label: 'Penguin' },
  { key: 'zebra', label: 'Zebra' },
  { key: 'shark', label: 'Shark' },
  { key: 'whale', label: 'Whale' },
  { key: 'otter', label: 'Otter' },
  { key: 'crocodile', label: 'Crocodile' },
];
export default function Transactions() {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold">Transactions</p>
          <p className="text-sm">Easily track your transaction history</p>
        </div>
        <Button isIconOnly color="primary" radius="full">
          <Plus />
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
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
            <Select
              placeholder="Category"
              selectionMode="multiple"
              className="max-w-52"
              radius="full"
            >
              {animals.map((animal) => (
                <SelectItem key={animal.key}>{animal.label}</SelectItem>
              ))}
            </Select>
            <Button radius="full">Export csv</Button>
          </div>
        </div>
        <TransactionTable />
      </div>
    </section>
  );
}
