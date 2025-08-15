import PasswordInput from '@/components/password-input';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { signup } from '@/actions/auth-action';

export default function SignUp() {
  return (
    <form className="flex flex-col gap-6 w-96" action={signup}>
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

      <PasswordInput
        label="Confirm Password"
        placeholder="Enter your password"
        id="confirm-password"
        name="confirm-password"
        variant="bordered"
        labelPlacement="outside-top"
        isRequired
      />

      <Button type="submit">Sign up</Button>
    </form>
  );
}
