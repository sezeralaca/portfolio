import { FC } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const ITEMS = [
  {
    label: "Privacy",
    href: "/privacy",
    icon: "mdi:shield-lock-outline",
    isExternal: false,
  },
  {
    label: "Email",
    href: "mailto:ahmetsezeralaca@gmail.com",
    icon: "skill-icons:gmail-light",
    isExternal: true,
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/sezeralaca",
    icon: "skill-icons:linkedin",
    isExternal: true,
  },
  {
    label: "Github",
    href: "https://github.com/sezeralaca",
    icon: "skill-icons:github-light",
    isExternal: true,
  },
  
  // {
  //   label: "Source code",
  //   href: "",
  //   icon: "logos:opensource",
  // },
];

export const StartMenu: FC = () => {
  return (
    <div className="absolute bottom-10 left-0 flex h-[250px] w-52 border-2 border-[#7c7c7c] border-l-white border-t-white bg-silver">
      <div className="w-[26px] bg-accent">
        <p className="translate-y-[215px] -rotate-90 text-lg font-bold text-white">
         sezeralaca.dev<span className="ml-1.5"></span>
        </p>
      </div>

      <div className="flex w-full flex-col text-sm">
        {ITEMS.map((item) => (
          <StartMenuItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

const StartMenuItem: FC<{
  label: string;
  href: string;
  icon: string;
  isExternal: boolean;
}> = ({ label, href, icon, isExternal }) => {
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="flex items-center gap-2 px-2.5 py-2 hover:bg-accent hover:text-white"
    >
      <Icon icon={icon} className="h-8 w-8" />
      {label}
    </Link>
  );
};
