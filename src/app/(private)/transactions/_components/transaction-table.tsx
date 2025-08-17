'use client';
import { BACKGROUND_OPACITY } from '@/constants';
import TransactionFields from '@/models/enums/TransactionFields';
import { TransactionResponse } from '@/models/interfaces/ITransactions';
import { formatCurrency, hexToRgba } from '@/utils';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Chip,
} from '@heroui/react';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';
import { useCallback, useState } from 'react';

const columns = [
  {
    key: TransactionFields.CREATED_AT,
    label: 'DATE',
  },
  {
    key: 'categories',
    label: 'CATEGORY',
  },
  {
    key: TransactionFields.NOTE,
    label: 'NOTE',
  },
  {
    key: TransactionFields.AMOUNT,
    label: 'AMOUNT',
  },
];

export default function TransactionTable({
  transactions,
}: {
  transactions: TransactionResponse[];
}) {
  const [page, setPage] = useState(1);
  const renderCell = useCallback(
    (
      transaction: TransactionResponse,
      columnKey: keyof TransactionResponse
    ) => {
      switch (columnKey) {
        case TransactionFields.CREATED_AT:
          return new Date(
            transaction.created_at as string
          ).toLocaleDateString();
        case 'categories':
          const cellValue = transaction.categories;
          return (
            <Chip
              style={{
                backgroundColor: hexToRgba(cellValue.color, BACKGROUND_OPACITY),
              }}
            >
              <div className="flex items-center gap-2">
                <DynamicIcon
                  name={cellValue.icon as IconName}
                  size={14}
                  color={cellValue.color}
                />
                <span style={{ color: cellValue.color }}>
                  {cellValue?.name}
                </span>
              </div>
            </Chip>
          );
        case TransactionFields.AMOUNT:
          return formatCurrency.format(transaction.amount);
        default:
          return transaction[columnKey];
      }
    },
    []
  );

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
      <TableBody items={transactions} emptyContent={'No rows to display.'}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>
                {renderCell(item, columnKey as keyof TransactionResponse)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
