'use client';
import EmojiPickerInput from '@/components/emoji-picker';
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
import listIcon from '../../../components/icon-picker/list-icon';
import { DynamicIcon } from 'lucide-react/dynamic';
import colors from './list-color';
import IconPicker from '@/components/icon-picker';

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
            <>
              <ModalHeader className="flex flex-col gap-1">
                New category
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-6">
                  <Input
                    label="Category name"
                    placeholder="Category"
                    type="categoryName"
                    id="categoryName"
                    name="categoryName"
                    radius="full"
                    labelPlacement="outside-top"
                    isRequired
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-small text-foreground font-medium">
                      Category icon
                    </p>
                    <IconPicker />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-small text-foreground font-semibold">
                      Color
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {colors.map((color) => {
                        return (
                          <div
                            key={color}
                            className={`bg-[${color}] rounded-full w-12 h-12`}
                            style={{ backgroundColor: color }}
                          ></div>
                        );
                      })}
                    </div>
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
                  onPress={onClose}
                  radius="full"
                >
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
