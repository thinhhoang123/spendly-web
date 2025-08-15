import { IconName } from 'lucide-react/dynamic';

export default interface Category {
  id: number;
  created_at: string;
  created_by: string;
  name: string;
  icon: IconName;
  color: string;
}
