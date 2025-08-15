'use client';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Pagination,
} from '@heroui/react';
import { useState } from 'react';
const rows = [
  {
    id: 1,
    date: '2025-08-01',
    category: 'Groceries',
    note: 'Weekly supermarket run',
    amount: 85.4,
  },
  {
    id: 2,
    date: '2025-08-03',
    category: 'Transport',
    note: 'Gas refill',
    amount: 45.0,
  },
  {
    id: 3,
    date: '2025-08-05',
    category: 'Utilities',
    note: 'Electricity bill',
    amount: 60.75,
  },
  {
    id: 4,
    date: '2025-08-07',
    category: 'Entertainment',
    note: 'Movie night',
    amount: 12.0,
  },
  {
    id: 5,
    date: '2025-08-09',
    category: 'Dining',
    note: 'Dinner with friends',
    amount: 150.25,
  },
  {
    id: 6,
    date: '2025-08-11',
    category: 'Health',
    note: 'Pharmacy purchase',
    amount: 23.8,
  },
  {
    id: 7,
    date: '2025-08-12',
    category: '🧐 Subscription',
    note: 'Monthly streaming service',
    amount: 9.99,
  },
  {
    id: 8,
    date: '2025-08-12',
    category: '🧐 Subscription',
    note: 'Monthly streaming service',
    amount: 9.99,
  },
  {
    id: 9,
    date: '2025-08-12',
    category: '🧐 Subscription',
    note: 'Monthly streaming service',
    amount: 9.99,
  },
  {
    id: 10,
    date: '2025-08-12',
    category: '🧐 Subscription',
    note: 'Monthly streaming service',
    amount: 9.99,
  },
];

const columns = [
  {
    key: 'date',
    label: 'DATE',
  },
  {
    key: 'category',
    label: 'CATEGORY',
  },
  {
    key: 'note',
    label: 'NOTE',
  },
  {
    key: 'amount',
    label: 'AMOUNT',
  },
];

export default function TransactionTable() {
  const [page, setPage] = useState(1);

  return (
    <Table
      aria-label="Example table with dynamic content"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={100}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
    >
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody emptyContent={'No rows to display.'}>
        {rows.map((row) => (
          <TableRow key={row.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(row, columnKey)}</TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
