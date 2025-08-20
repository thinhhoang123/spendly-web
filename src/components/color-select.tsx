import colors from '@/lib/constants/colors';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

interface ColorSelectProps {
  name?: string;
  onChange: (value: string) => void;
}
export default function ColorSelect({ name, onChange }: ColorSelectProps) {
  return (
    <RadioGroup
      name={name}
      defaultValue={colors[0]}
      className="flex flex-wrap gap-2"
      onChange={(event) => onChange?.((event.target as HTMLInputElement).value)}
    >
      {colors.map((color) => (
        <Label
          className="p-2 rounded-full cursor-pointer"
          style={{ backgroundColor: color }}
          key={color}
        >
          <RadioGroupItem
            value={color}
            className="border-none shadow-none cursor-pointer data-[state=checked]:bg-white/20"
          />
        </Label>
      ))}
    </RadioGroup>
  );
}
