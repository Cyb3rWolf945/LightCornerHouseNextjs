export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "LightCornerHouse",
  description: "Come and explore the historic city of Lisbon while enjoying the traditionality of our cozy rooms in a simple yet elegant way. Lightcornerhouse is located in the ...",
  navItems: [
    {
      label: "Rooms",
      href: "/rooms",
    },
    {
      label: "Tours",
      href: "/tours",
    }
  ],
  navMenuItems: [
    {
      label: "Rooms",
      href: "/rooms",
    },
    {
      label: "Tours",
      href: "/tours",
    },
  ],
  links: {
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
