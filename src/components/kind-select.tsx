'use client';
import KINDS from '@/constants/kinds';
import {
  RadioGroup,
  useRadio,
  VisuallyHidden,
  cn,
  Button,
} from '@heroui/react';

export const CustomRadio = (props: {
  value: string;
  children: React.ReactNode;
}) => {
  const {
    Component,
    children,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getControlProps,
  } = useRadio(props);
  return (
    <Component {...getBaseProps()} className={cn('group ')}>
      <VisuallyHidden>
        <input {...getInputProps()} />
        <span {...getWrapperProps()}>
          <span {...getControlProps()} />
        </span>
      </VisuallyHidden>
      <Button
        variant={getInputProps().checked ? 'solid' : 'bordered'}
        color={getInputProps().value == KINDS.EXPENSE ? 'danger' : 'success'}
        radius="full"
        size="sm"
        as={'div'}
      >
        {children}
      </Button>
    </Component>
  );
};

export default function KindSelect() {
  return (
    <RadioGroup
      defaultValue={KINDS.EXPENSE.toString()}
      label="Kinds"
      orientation="horizontal"
      onChange={(val) => console.log(val.target.value)}
    >
      <CustomRadio value={KINDS.EXPENSE.toString()}>Expense</CustomRadio>
      <CustomRadio value={KINDS.INCOME.toString()}>Income</CustomRadio>
    </RadioGroup>
  );
}
