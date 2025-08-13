import { cn, RadioGroup, useRadio, VisuallyHidden } from '@heroui/react';
import colors from '../constants/colors-select';
import { Circle } from 'lucide-react';

interface ColorSelectProps {
  label?: string;
  name?: string;
  onSelect?: (value: string) => void;
}
export default function ColorSelect({
  label,
  name,
  onSelect,
}: ColorSelectProps) {
  return (
    <RadioGroup
      defaultValue={colors[0]}
      label={label}
      name={name}
      orientation="horizontal"
      onChange={(event) => onSelect?.(event.target.value)}
    >
      {colors.map((color) => {
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
