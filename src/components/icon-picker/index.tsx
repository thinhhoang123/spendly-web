'use client';

import { DynamicIcon } from 'lucide-react/dynamic';
import listIcon from './list-icon';
import { Tooltip } from '@heroui/react';

export default function IconPicker() {
  return (
    <div className="flex gap-2 flex-wrap">
      {listIcon.map((icon) => {
        return (
          <Tooltip content={icon.name} key={icon.name}>
            <div className="bg-neutral-100 rounded-full p-3 border-1 cursor-pointer border-transparent hover:border-neutral-500">
              <DynamicIcon name={icon.icon} size={24} color="gray" />
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
}
