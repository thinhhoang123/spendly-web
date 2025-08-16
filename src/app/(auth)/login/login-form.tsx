'use client';
import { login } from '@/actions/auth-action';
import Alert from '@/components/alert';
import PasswordInput from '@/components/password-input';
import SubmitButton from '@/components/submit-btn';
import ActionResponse from '@/models/ActionResponse';
import LoginRequest from '@/models/LoginRequest';
import { Input } from '@heroui/react';
import { useActionState } from 'react';

export default function LoginForm() {
  const initialSate: ActionResponse<LoginRequest> = {
    message: '',
    success: false,
  };
  const [state, formAction, isPending] = useActionState(login, initialSate);

  return (
    <form className="flex flex-col gap-6" action={formAction}>
      <Alert
        color="danger"
        title={state.message}
        isVisible={!state.success && state.message !== ''}
      />

      <Input
        label="Email"
        placeholder="Enter your email"
        type="email"
        id="email"
        name="email"
        labelPlacement="outside-top"
        isRequired
        radius="full"
        defaultValue={state?.inputs?.email}
      />
      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        id="password"
        name="password"
        isRequired
        labelPlacement="outside-top"
        radius="full"
        defaultValue={state?.inputs?.password}
      />
      <SubmitButton className="mt-2" isLoading={isPending}>
        Login
      </SubmitButton>
    </form>
  );
}
