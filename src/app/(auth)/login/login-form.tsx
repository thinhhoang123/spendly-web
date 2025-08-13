'use client';
import { login } from '@/actions/auth-action';
import PasswordInput from '@/components/password-input';
import { Button, Input } from '@heroui/react';
import { useActionState } from 'react';

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, { message: '' });
  console.log(state);
  return (
    <form className="flex flex-col gap-6 w-96" action={formAction}>
      <Input
        label="Email"
        placeholder="Enter your email"
        type="email"
        id="email"
        name="email"
        variant="bordered"
        labelPlacement="outside-top"
        isRequired
      />

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        id="password"
        name="password"
        variant="bordered"
        labelPlacement="outside-top"
        isRequired
      />
      <Button type="submit" color="primary" isLoading={pending}>
        Log in
      </Button>
    </form>
  );
}
