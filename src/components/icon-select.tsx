'use client';
import {
  cn,
  RadioGroup,
  Tooltip,
  useRadio,
  VisuallyHidden,
} from '@heroui/react';
import ICONS from '@/constants/icons-select';
import { DynamicIcon } from 'lucide-react/dynamic';
import { hexToRgba } from '@/utils';
import { BACKGROUND_OPACITY } from '@/constants';
import { useColor } from '@/stores/category-stores';

interface IconSelectProps {
  label?: string;
  name?: string;
  onSelect?: (value: string) => void;
}
export default function IconSelect({ label, name, onSelect }: IconSelectProps) {
  const colorSelect = useColor((state) => state.color);
  return (
    <RadioGroup
      defaultValue={ICONS[0].icon}
      label={label}
      name={name}
      orientation="horizontal"
      onChange={(event) => onSelect?.(event.target.value)}
    >
      {ICONS.map((icon) => {
        return (
          <IconRadio
            value={icon.icon}
            key={icon.name}
            colorSelect={colorSelect}
          />
        );
      })}
    </RadioGroup>
  );
}

export const IconRadio = ({
  value,
  colorSelect,
}: {
  value: string;
  colorSelect?: string;
}) => {
  const {
    Component,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getControlProps,
  } = useRadio({ value });

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        'group inline-flex justify-center items-center hover:opacity-90 hover:bg-neutral-100 w-12 h-12 rounded-full cursor-pointer',
        'data-[selected=true]:border-1'
      )}
      style={{
        backgroundColor: getInputProps().checked
          ? hexToRgba(colorSelect ?? '#fff', BACKGROUND_OPACITY)
          : null,
        borderColor: getInputProps().checked ? colorSelect : null,
      }}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
        <span {...getWrapperProps()}>
          <span {...getControlProps()} />
        </span>
      </VisuallyHidden>
      <DynamicIcon
        name={getInputProps().value}
        size={24}
        color={getInputProps().checked ? colorSelect : 'gray'}
      />
    </Component>
  );
};
