'use client';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function RadioGroupTransactionType({ name }: { name: string }) {
  return (
    <RadioGroup name={name} defaultValue="1" className="grid-cols-2">
      <CustomRadio>
        <RadioGroupItem value="1" />
        <p>Expense</p>
      </CustomRadio>
      <CustomRadio>
        <RadioGroupItem value="2" />
        <p>Income</p>
      </CustomRadio>
    </RadioGroup>
  );
}

const CustomRadio = ({ children }: { children: React.ReactNode }) => {
  return (
    <Label className="flex col-span-1 items-center gap-3 border py-4 px-3 rounded-lg cursor-pointer has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-primary/10">
      {children}
    </Label>
  );
};
