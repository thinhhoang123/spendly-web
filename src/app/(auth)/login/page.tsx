import { Link } from '@heroui/link';
import LoginForm from './login-form';

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-8">
      <LoginForm />
      <div className="text-center text-sm">
        Don&apos;t have an account?{' '}
        <Link href="/sign-up" size="sm">
          Sign up
        </Link>
      </div>
    </div>
  );
}
