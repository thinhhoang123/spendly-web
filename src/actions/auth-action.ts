'use server';

import LoginRequest from '@/interfaces/requests/LoginRequest';
import ActionResponse from '@/interfaces/responses/ActionResponse';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import loginSchema from './schemas/login';
import { createClient } from '@/lib/supabase/server';
import { User } from '@supabase/supabase-js';

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

export async function getUserInformation(): Promise<User | null> {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    redirect('/login');
  }
  return data.user;
}
