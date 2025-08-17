'use client';
import { Button, ButtonProps } from '@heroui/react';
export default function SubmitButton(props: ButtonProps) {
  return (
    <Button {...props} color="primary" type="submit">
      {props.children}
    </Button>
  );
}
