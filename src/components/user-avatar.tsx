'use client';
import { signOut } from '@/actions/auth-action';
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from '@heroui/react';

export default function UserAvatar() {
  const items = [
    {
      key: 'new',
      label: 'New file',
    },
    {
      key: 'copy',
      label: 'Copy link',
    },
    {
      key: 'edit',
      label: 'Setting',
    },
    {
      key: 'delete',
      label: 'Log out',
      onClick: () => signOut(),
    },
  ];

  return (
    <Dropdown>
      <DropdownTrigger>
        <User
          as="button"
          avatarProps={{
            isBordered: true,
            src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
          }}
          className="transition-transform"
          description="@tonyreichert"
          name="Tony Reichert"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            className={item.key === 'delete' ? 'text-danger' : ''}
            color={item.key === 'delete' ? 'danger' : 'default'}
            onClick={item?.onClick}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
