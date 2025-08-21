'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SpendlyEmojiPicker from '../spendly-emoji-picker';
import { useActionState, useRef, useState } from 'react';
import { createCategory } from '@/actions/category-actions';
import RadioGroupTransactionType from '../transaction-type-radio';
import ColorSelect from '../color-select';
import colors from '@/lib/constants/colors';
import { Loader2Icon, Plus } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export default function CategoryFrom() {
  const initialState = { message: '', success: false };
  const [color, setColor] = useState(colors[0]);
  const [state, formAction, isPending] = useActionState(
    createCategory,
    initialState
  );
  const isMobile = useIsMobile();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={isMobile ? 'icon' : 'default'}>
          <Plus /> {isMobile ? '' : 'Add'}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form action={formAction} className="flex flex-col gap-4">
          <DialogHeader>
            <DialogTitle>New category</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Emoji & Name</Label>
              <div className="flex gap-2">
                <SpendlyEmojiPicker name="icon" color={color} />
                <Input id="name-1" name="name" />
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Color</Label>
              <ColorSelect name="color" onChange={(value) => setColor(value)} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Transaction types</Label>
              <RadioGroupTransactionType name="transactionType" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isPending}>
              {isPending && <Loader2Icon className="animate-spin" />}
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
