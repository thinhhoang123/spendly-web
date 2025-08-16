'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import loginSchema from './schemas/login';
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import { AuthResponse, User } from '@/models/UserToken';

export async function login(formData: FormData): Promise<void> {
  const validatedFields = loginSchema.safeParse({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });
  if (!validatedFields.success) {
    return;
  }
  const supabase = await createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect('/error');
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
