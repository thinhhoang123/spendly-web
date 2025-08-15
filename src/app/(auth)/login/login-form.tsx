'use client';
import { login } from '@/actions/auth-action';
import PasswordInput from '@/components/password-input';
import { Button, Input } from '@heroui/react';

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-6" action={login}>
      <Input
        label="Email"
        placeholder="Enter your email"
        type="email"
        id="email"
        name="email"
        labelPlacement="outside-top"
        isRequired
        radius="full"
      />

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        id="password"
        name="password"
        isRequired
        labelPlacement="outside-top"
        radius="full"
      />
      <Button type="submit" color="primary" radius="full" className="mt-2">
        Log in
      </Button>
    </form>
  );
}
