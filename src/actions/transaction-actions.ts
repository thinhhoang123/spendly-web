'use server';
import ActionResponse from '@/models/interfaces/ActionResponse';
import { createClient } from '@/utils/supabase/server';
import { getUserId } from './auth-action';
import SUPABASE_TABLE from '@/constants/supabase-table';
import { revalidatePath } from 'next/cache';
import {
  TransactionRequest,
  TransactionResponse,
} from '@/models/interfaces/ITransactions';
import { parseZonedDateTime } from '@internationalized/date';

export async function getTransactions() {
  const supabase = await createClient();
  const userId = await getUserId();
  const { data } = await supabase
    .from(SUPABASE_TABLE.TRANSACTIONS)
    .select(
      `
      *,
      categories (name, icon, color)`
    )
    .eq('created_by', userId)
    .order('created_at', { ascending: false });

  return data as TransactionResponse[];
}
export async function createTransaction(
  _: ActionResponse<TransactionRequest> | null,
  formData: FormData
): Promise<ActionResponse<TransactionRequest>> {
  const supabase = await createClient();
  const userId = await getUserId();
  const raw = Object.fromEntries(
    formData.entries()
  ) as unknown as TransactionRequest;
  const data: TransactionRequest = {
    ...raw,
    amount: Number(raw.amount),
    created_at: parseZonedDateTime(raw.created_at).toDate().toISOString(),
    created_by: userId,
  };

  const { error } = await supabase
    .from(SUPABASE_TABLE.TRANSACTIONS)
    .insert([data])
    .select();

  if (error) {
    return {
      success: false,
      message: error.message,
      inputs: data,
    };
  }

  revalidatePath('/transactions', 'page');
  return {
    success: true,
    message: 'Create success',
  };
}
