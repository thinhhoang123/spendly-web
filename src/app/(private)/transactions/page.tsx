import { Button } from '@heroui/button';
import TransactionTable from './_components/transaction-table';
import { DateRangePicker } from '@heroui/date-picker';
import AddTransaction from './_components/add-transactions';
import { getTransactions } from '@/actions/transaction-actions';
import { TransactionResponse } from '@/models/interfaces/ITransactions';
export default async function Transactions() {
  const transactions: TransactionResponse[] = await getTransactions();
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
            {/* <Input
              className="max-w-62"
              aria-label="Search"
              placeholder="Search..."
              startContent={
                <Search className="text-base text-default-400 pointer-events-none flex-shrink-0" />
              }
              type="search"
            /> */}
          </div>
          <div className="flex gap-4 w-full justify-end">
            <DateRangePicker className="max-w-62" />
            <Button>Export csv</Button>
          </div>
        </div>
        <TransactionTable transactions={transactions} />
      </div>
    </section>
  );
}
