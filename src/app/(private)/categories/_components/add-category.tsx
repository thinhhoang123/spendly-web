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
} from '@heroui/react';
import { Plus } from 'lucide-react';
import ColorSelect from '@/components/color-select';
import IconSelect from '@/components/icon-select';
import { useActionState, useEffect } from 'react';
import { createCategory } from '@/actions/category-actions';

export default function AddCategory() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [state, formAction, pending] = useActionState(createCategory, {});

  useEffect(() => {
    if (!pending && state) {
      onClose();
    }
  }, [pending, state]);

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
                New category
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-6">
                  <Input
                    label="Category name"
                    placeholder="Category"
                    type="name"
                    id="name"
                    name="name"
                    radius="full"
                    labelPlacement="outside-top"
                    isRequired
                  />
                  <div className="flex flex-col gap-2">
                    <IconSelect label="Icons" name="icon" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <ColorSelect label="Colors" name="color" />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  radius="full"
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  isLoading={pending}
                  radius="full"
                >
                  Create
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
