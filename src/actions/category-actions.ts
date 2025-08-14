'use server';

import Category from '@/models/Category';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function getCategories() {
  const cookieStore = await cookies();
  console.log(cookieStore.get(''));
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    console.error('Error fetching user:', userError);
    return;
  }
  if (!user) {
    console.error('No logged-in user');
    return;
  }
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('created_by', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  return data as Category[];
}

export async function createCategory(initialState: object, formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    console.error('Error fetching user:', userError);
    return;
  }
  if (!user) {
    console.error('No logged-in user');
    return;
  }
  const request = {
    name: formData.get('name') as string,
    icon: formData.get('icon') as string,
    color: formData.get('color') as string,
    created_by: user.id,
  };

  const { data, error } = await supabase
    .from('categories')
    .insert(request)
    .select(); // return the inserted row(s)

  if (error) {
    console.error('Error inserting category:', error);
    return;
  }

  revalidatePath('/categories', 'page');
  return data;
}
