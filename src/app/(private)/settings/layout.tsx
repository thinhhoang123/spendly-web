import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Boxes } from 'lucide-react';
import Link from 'next/link';

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Setting
        </h3>
        <p className="text-muted-foreground">
          Update account preferences and manage integrations.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-2">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="categories"
                    className="flex flex-row gap-2 items-center"
                  >
                    <Boxes />
                    Categories
                  </Link>
                </NavigationMenuLink>
                {/* <NavigationMenuLink asChild>
                  <Link
                    href="categories"
                    className="flex flex-row gap-2 items-center"
                  >
                    <Boxes />
                    Categories
                  </Link>
                </NavigationMenuLink> */}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="col-span-12 md:col-span-10">{children}</div>
      </div>
    </section>
  );
}
