'use client';
import { cn, RadioGroup, useRadio, VisuallyHidden } from '@heroui/react';
import COLORS from '../constants/colors-select';
import { Circle } from 'lucide-react';
import { useColor } from '@/stores/category-stores';

interface ColorSelectProps {
  label?: string;
  name?: string;
  onSelect?: (value: string) => void;
}
export default function ColorSelect({ label, name }: ColorSelectProps) {
  const defaultColor = useColor((state) => state.color);
  const updateColorSelect = useColor((state) => state.updateColor);
  return (
    <RadioGroup
      defaultValue={defaultColor}
      label={label}
      name={name}
      orientation="horizontal"
      onChange={(event) => updateColorSelect?.(event.target.value)}
    >
      {COLORS.map((color) => {
        return <ColorRadio value={color} key={color} />;
      })}
    </RadioGroup>
  );
}

export const ColorRadio = (props: { value: string }) => {
  const {
    Component,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        'group inline-flex justify-center items-center hover:opacity-90 w-12 h-12 rounded-full cursor-pointer',
        'data-[selected=true]:border-primary'
      )}
      style={{ backgroundColor: getInputProps().value }}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
        <span {...getWrapperProps()}>
          <span {...getControlProps()} />
        </span>
      </VisuallyHidden>
      {getInputProps().checked ? (
        <Circle size={18} fill="white" color="white" />
      ) : null}
    </Component>
  );
};
