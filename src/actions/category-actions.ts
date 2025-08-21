'use server';
import CategoryRequest from '@/interfaces/requests/CategoryRequest';
import ActionResponse from '@/interfaces/responses/ActionResponse';
import { createClient } from '@/lib/supabase/server';
import { getUserInformation } from './auth-action';
import SUPABASE_TABLE from '@/lib/constants/supbase-table';
import { revalidatePath } from 'next/cache';
import Category from '@/interfaces/responses/Category';

export async function getCategories(query?: string) {
  const supabase = await createClient();
  const user = await getUserInformation();

  const { data, error } = await supabase
    .from(SUPABASE_TABLE.CATEGORIES)
    .select('*')
    .eq('createdBy', user?.id ?? '')
    .ilike('name', `%${query}%`)
    .order('createdAt', { ascending: false });

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
  const userId = await getUserInformation();

  const data: CategoryRequest = {
    name: formData.get('name') as string,
    icon: formData.get('icon') as string,
    color: formData.get('color') as string,
    transactionType: formData.get('transactionType') as string,
    createdBy: userId?.id ?? '',
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
