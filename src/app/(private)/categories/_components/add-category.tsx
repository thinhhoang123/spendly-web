'use client';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  ScrollShadow,
} from '@heroui/react';
import { Plus } from 'lucide-react';
import ColorSelect from '@/components/color-select';
import IconSelect from '@/components/icon-select';
import { createCategory } from '@/actions/category-actions';
import KindSelect from '../../../../components/kind-select';
import SubmitButton from '@/components/submit-btn';
import { useActionState } from 'react';
export default function AddCategory() {
  const initialState = { message: '', success: false };
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [state, formAction, isPending] = useActionState(
    createCategory,
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
            <>
              <ModalHeader className="flex flex-col gap-1">
                New category
              </ModalHeader>
              <form action={formAction}>
                <ModalBody>
                  <ScrollShadow className="h-[400px]">
                    <div className="flex flex-col gap-6">
                      <Input
                        label="Category name"
                        type="name"
                        name="name"
                        isRequired
                      />
                      <KindSelect name="kind" label="Kinds" />
                      <IconSelect label="Icons" name="icon" />
                      <ColorSelect label="Colors" name="color" />
                    </div>
                  </ScrollShadow>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="light"
                    onPress={onClose}
                    radius="full"
                    type="button"
                  >
                    Close
                  </Button>
                  <SubmitButton isLoading={isPending}>Create</SubmitButton>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

