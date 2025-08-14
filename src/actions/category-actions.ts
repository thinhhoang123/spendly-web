'use server';

import SUPABASE_TABLE from '@/constants/supabase-table';
import Category from '@/models/Category';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { getUser } from './auth-action';

export async function getCategories() {
  const supabase = await createClient();

  const user = await getUser();
  const { data, error } = await supabase
    .from(SUPABASE_TABLE.CATEGORIES)
    .select('*')
    .eq('created_by', user?.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  return data as Category[];
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createCategory(prevState: string, formData: FormData) {
  const supabase = await createClient();
  const user = await getUser();

  const request = {
    name: formData.get('name') as string,
    icon: formData.get('icon') as string,
    color: formData.get('color') as string,
    created_by: user?.id,
  };

  const { data, error } = await supabase
    .from(SUPABASE_TABLE.CATEGORIES)
    .insert(request)
    .select();

  if (error) {
    console.error('Error inserting category:', error);
    return;
  }

  revalidatePath('/categories', 'page');
  return data;
}

export async function deleteCategory(id: number) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from(SUPABASE_TABLE.CATEGORIES)
    .delete()
    .eq('id', id);
}
