'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import loginSchema from './schemas/login';
import { User } from '@/models/UserToken';
import ActionResponse from '@/models/interfaces/ActionResponse';
import LoginRequest from '@/models/LoginRequest';

export async function login(
  _: ActionResponse<LoginRequest> | null,
  formData: FormData
): Promise<ActionResponse<LoginRequest>> {
  const data: LoginRequest = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const validatedFields = loginSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: '',
      errors: validatedFields.error.flatten().fieldErrors,
      inputs: data,
    };
  }
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(data);
  console.log(error);
  if (error) {
    return {
      success: false,
      message: 'Incorrect email or password',
      inputs: data,
    };
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(formData: FormData): Promise<void> {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signOut() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();
  if (error) {
    redirect('/error');
  }

  redirect('/login');
}

export async function getUserInformation(): Promise<User> {
  const supabase = await createClient();
  const session = await supabase.auth.getSession();
  return session.data.session?.user as User;
}

export async function getUserId() {
  const user = await getUserInformation();
  return user.identities[0].user_id;
}
