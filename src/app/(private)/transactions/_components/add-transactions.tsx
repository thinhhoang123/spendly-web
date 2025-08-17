'use client';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  NumberInput,
  DatePicker,
  Textarea,
} from '@heroui/react';
import { Plus } from 'lucide-react';
import CategorySelect from '@/components/category-select';
import { getLocalTimeZone, now } from '@internationalized/date';
import { createTransaction } from '@/actions/transaction-actions';
import { useActionState } from 'react';
import ActionResponse from '@/models/interfaces/ActionResponse';
import SubmitButton from '@/components/submit-btn';
import { TransactionRequest } from '@/models/interfaces/ITransactions';
import TransactionFields from '@/models/enums/TransactionFields';

export default function AddTransaction() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const initialState: ActionResponse<TransactionRequest> = {
    message: '',
    success: false,
  };
  const [state, formAction, isPending] = useActionState(
    createTransaction,
    initialState
  );
  console.log(state);
  return (
    <>
      <Button isIconOnly color="primary" radius="full" onPress={onOpen}>
        <Plus />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form action={formAction}>
              <ModalHeader className="flex flex-col gap-1">
                New transaction
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-6">
                  <NumberInput
                    name={TransactionFields.AMOUNT}
                    label="Amount"
                    formatOptions={{
                      style: 'currency',
                      currency: 'VND',
                    }}
                    isRequired
                    classNames={{
                      inputWrapper: ['shadow-none'],
                    }}
                  />
                  <CategorySelect name={TransactionFields.CATEGORY_ID} />
                  <DatePicker
                    name={TransactionFields.CREATED_AT}
                    label="Date"
                    defaultValue={now(getLocalTimeZone())}
                    isRequired
                    showMonthAndYearPickers
                    hideTimeZone
                  />
                  <Textarea
                    name={TransactionFields.NOTE}
                    label="Note"
                    placeholder="Enter your description"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <SubmitButton isLoading={isPending}>Create</SubmitButton>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
