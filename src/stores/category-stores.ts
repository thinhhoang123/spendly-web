import COLORS from '@/constants/colors-select';
import { create } from 'zustand';
interface ColorState {
  color: string;
  updateColor: (newColor: string) => void;
}
export const useColor = create<ColorState>((set) => ({
  color: COLORS[0],
  updateColor: (newColor: string) => set({ color: newColor }),
}));
