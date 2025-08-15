'use client';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  ScrollShadow,
  NumberInput,
  DatePicker,
  Textarea,
} from '@heroui/react';
import { Plus } from 'lucide-react';

import KindSelect from '@/components/kind-select';
import CategorySelect from '@/components/category-select';
import { getLocalTimeZone, today } from '@internationalized/date';

export default function AddTransaction() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  //   const [state, formAction, pending] = useActionState(createCategory, {});

  //   useEffect(() => {
  //     if (!pending && state) {
  //       onClose();
  //     }
  //   }, [pending, state]);

  return (
    <>
      <Button isIconOnly color="primary" radius="full" onPress={onOpen}>
        <Plus />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form>
              <ModalHeader className="flex flex-col gap-1">
                New category
              </ModalHeader>
              <ModalBody>
                <ScrollShadow className="h-[480px]">
                  <div className="flex flex-col gap-6">
                    <KindSelect />

                    <NumberInput
                      label="Amount"
                      placeholder="₫10,000"
                      id="amount"
                      name="amount"
                      radius="full"
                      labelPlacement="outside"
                      formatOptions={{
                        style: 'currency',
                        currency: 'VND',
                      }}
                      isRequired
                    />

                    <CategorySelect />
                    <DatePicker
                      label="Date"
                      labelPlacement="outside"
                      radius="full"
                      defaultValue={today(getLocalTimeZone())}
                      isRequired
                    />
                    <Textarea
                      label="Note"
                      placeholder="Enter your description"
                      radius="full"
                      labelPlacement="outside"
                    />
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
