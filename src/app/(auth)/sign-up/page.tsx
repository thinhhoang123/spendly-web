import PasswordInput from '@/components/password-input';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { signup } from '@/actions/auth-action';

export default function SignUp() {
  return (
    <form className="flex flex-col gap-6 w-96">
      <Input
        label="Email"
        placeholder="Enter your email"
        type="email"
        id="email"
        name="email"
        variant="bordered"
        labelPlacement="outside-top"
        size="lg"
        isRequired
      />

      <PasswordInput />
      <Button color="primary" size="lg" type="submit" formAction={signup}>
        Sign up
      </Button>
    </form>
  );
}
