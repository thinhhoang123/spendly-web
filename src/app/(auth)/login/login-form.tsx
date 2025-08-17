'use client';
import { login } from '@/actions/auth-action';
import Alert from '@/components/alert';
import PasswordInput from '@/components/password-input';
import SubmitButton from '@/components/submit-btn';
import ActionResponse from '@/models/interfaces/ActionResponse';
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
        type="email"
        id="email"
        name="email"
        isRequired
        defaultValue={state?.inputs?.email}
      />
      <PasswordInput
        label="Password"
        id="password"
        name="password"
        isRequired
        defaultValue={state?.inputs?.password}
      />
      <SubmitButton isLoading={isPending} size="lg">
        Login
      </SubmitButton>
    </form>
  );
}
