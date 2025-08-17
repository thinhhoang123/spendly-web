'use client';
import KINDS from '@/constants/kinds';
import { Tabs, Tab } from '@heroui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function TabCategory({ value }: { value: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChangeTab = (tab: string) => {
    const params = new URLSearchParams(searchParams);
    if (tab) {
      params.set('tab', tab);
    } else {
      params.delete('tab');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        onSelectionChange={(value) => handleChangeTab(value.toString())}
        defaultSelectedKey={value}
      >
        <Tab key={KINDS.EXPENSE} title="Expense" />
        <Tab key={KINDS.INCOME} title="Income" />
      </Tabs>
    </div>
  );
}
