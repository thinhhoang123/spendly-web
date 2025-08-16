'use client';
import { Alert as AlertHeroUI, AlertProps } from '@heroui/react';
import { useState } from 'react';

export default function Alert(props: AlertProps) {
  const [isVisible, setIsVisible] = useState(props.isVisible ?? false);

  return (
    <AlertHeroUI
      {...props}
      isVisible={isVisible}
      onClose={() => setIsVisible(false)}
      radius="full"
    />
  );
}
