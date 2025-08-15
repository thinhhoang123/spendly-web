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

export default function AddCategory() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button isIconOnly color="primary" radius="full" onPress={onOpen}>
        <Plus />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form action={createCategory}>
              <ModalHeader className="flex flex-col gap-1">
                New category
              </ModalHeader>
              <ModalBody>
                <ScrollShadow className="h-[600px]">
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
                    <KindSelect />
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
                >
                  Close
                </Button>
                <Button color="primary" type="submit" radius="full">
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

