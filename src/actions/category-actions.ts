'use server';

import SUPABASE_TABLE from '@/constants/supabase-table';
import Category from '@/models/Category';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { getUserId } from './auth-action';
import ActionResponse from '@/models/ActionResponse';
import CategoryRequest from '@/models/CategoryRequest';

export async function getCategories() {
  const supabase = await createClient();
  const userId = await getUserId();

  const { data, error } = await supabase
    .from(SUPABASE_TABLE.CATEGORIES)
    .select('*')
    .eq('created_by', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  return data as Category[];
}

export async function createCategory(
  _: ActionResponse<CategoryRequest> | null,
  formData: FormData
): Promise<ActionResponse<CategoryRequest>> {
  const supabase = await createClient();
  const userId = await getUserId();

  const data: CategoryRequest = {
    name: formData.get('name') as string,
    icon: formData.get('icon') as string,
    color: formData.get('color') as string,
    kind: formData.get('kind') as string,
    created_by: userId,
  };

  const { error } = await supabase
    .from(SUPABASE_TABLE.CATEGORIES)
    .insert([data])
    .select();

  if (error) {
    return {
      success: false,
      message: 'Can not create category',
      inputs: data,
    };
  }

  revalidatePath('/categories', 'page');
  return {
    success: true,
    message: 'Create success',
  };
}

export async function deleteCategory(id: number) {
  const supabase = await createClient();

  const { error } = await supabase
    .from(SUPABASE_TABLE.CATEGORIES)
    .delete()
    .eq('id', id);
  if (error) {
    console.error('Error inserting category:', error);
    return;
  }
  revalidatePath('/categories', 'page');
}
