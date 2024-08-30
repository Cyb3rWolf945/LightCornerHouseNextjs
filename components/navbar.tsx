import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";


import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import { Typography } from "@mui/material";

export const Navbar = () => {

  return (
    <NextUINavbar shouldHideOnScroll maxWidth="xl" className="bg-black p-4">

      {/* Menu wide screen */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              radius='none'
              as={NextImage}
              width={100}
              height={60}
              src="/logoTr.png"
              alt="NextUI hero Image"
            />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-8 justify-start ml-4">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className="text-white text-base"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <NextLink href="/booking">
            <Button
              size="md"
              radius="lg"
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
                "uppercase"
              )}
              color="warning">
              <Typography variant="button">
                Book Now
              </Typography>
            </Button>
          </NextLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle className="text-white" />
      </NavbarContent>


      {/* Menu mobile */}
      <NavbarMenu>
        <div className="mx-4 mt-8 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <NavbarMenuItem className="mx-4 mt-2">
          <NextLink href="/booking">
            <Button
              size="sm"
              radius="lg"
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
                "uppercase"
              )}
              color="warning">
              Book Now
            </Button>
          </NextLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};
