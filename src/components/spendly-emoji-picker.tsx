'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import {
  EmojiPicker,
  EmojiPickerContent,
  EmojiPickerFooter,
  EmojiPickerSearch,
} from './ui/emoji-picker';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export default function SpendlyEmojiPicker({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  const [icon, setIcon] = useState('✌🏻');
  return (
    <Popover modal>
      <input className="hidden" name={name} value={icon} onChange={() => {}} />
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          style={{ backgroundColor: color }}
        >
          <span className="text-shadow-sm">{icon}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        <EmojiPicker
          className="h-[342px]"
          onEmojiSelect={({ emoji }) => {
            setIcon(emoji);
          }}
        >
          <EmojiPickerSearch />
          <EmojiPickerContent />
          <EmojiPickerFooter />
        </EmojiPicker>
      </PopoverContent>
    </Popover>
  );
}
