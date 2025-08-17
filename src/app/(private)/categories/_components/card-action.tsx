'use client';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/react';
import { EllipsisVertical, Pen, Trash } from 'lucide-react';

export default function CardActions() {
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <Button isIconOnly variant="light" radius="full">
          <EllipsisVertical color="gray" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownItem key="edit" startContent={<Pen size={16} />}>
          Edit
        </DropdownItem>
        <DropdownItem
          key="delete"
          color="danger"
          className="text-danger"
          startContent={<Trash size={16} />}
        >
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
