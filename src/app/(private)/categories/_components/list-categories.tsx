import { hexToRgba } from '@/utils';
import { Card, CardBody } from '@heroui/card';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';
import EmptyCategories from './empty-state';
import { BACKGROUND_OPACITY } from '@/constants';
import { getCategoriesByKind } from '@/actions/category-actions';
import CardActions from './card-action';

interface ListCategoriesProps {
  kind: string;
}

export default async function ListCategories({ kind }: ListCategoriesProps) {
  const categories = await getCategoriesByKind(kind);

  if (!categories || categories?.length == 0) return <EmptyCategories />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((category) => {
        return (
          <Card key={category.id}>
            <CardBody className="flex flex-row items-center gap-3 justify-between">
              <div className="flex gap-3 flex-row items-center">
                <div
                  className="bg-neutral-200 rounded-full w-12 h-12 flex justify-center items-center"
                  style={{
                    backgroundColor: hexToRgba(
                      category.color,
                      BACKGROUND_OPACITY
                    ),
                  }}
                >
                  <DynamicIcon
                    size={24}
                    name={category.icon as IconName}
                    color={category.color}
                  />
                </div>
                <p className="text-lg font-medium">{category.name}</p>
              </div>
              <CardActions />
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

