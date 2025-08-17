import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@heroui/navbar';
import { Link } from '@heroui/link';
import NextLink from 'next/link';
import ThemeSwitch from '@/components/theme-switch';
import routes from '@/configs/routes';
import UserAvatar from '@/components/user-avatar';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { signOut } from '@/actions/auth-action';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold  text-2xl">Spendly.</p>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden sm:flex gap-4 justify-start ml-2">
          {routes.map((item) => {
            const isActive = pathname.includes(item.href);
            return (
              <NavbarItem key={item.href} isActive={isActive}>
                <NextLink
                  className={`${isActive ? 'text-primary font-bold' : ''}`}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <UserAvatar />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {routes.map((route) => {
            const isActive = pathname.includes(route.href);
            return (
              <NavbarMenuItem key={route.href}>
                <Link
                  color={'foreground'}
                  className={`${isActive ? 'text-primary font-bold' : ''}`}
                  href={route.href}
                  size="lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.label}
                </Link>
              </NavbarMenuItem>
            );
          })}
          <NavbarMenuItem>
            <Link
              color={'danger'}
              size="lg"
              onClick={async () => {
                await signOut();
                setIsMenuOpen(false);
              }}
              className="font-bold cursor-pointer"
            >
              Log out
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
}
