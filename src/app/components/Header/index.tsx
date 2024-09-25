import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemMenu } from "./ItemMenu";

const menuItems = [
  {
    url: "/",
    title: "Home",
    dropdown: false,
  },
  {
    url: "/products",
    title: "Products",
    dropdown: true,
  },
  {
    url: "/resources",
    title: "Resources",
    dropdown: true,
  },
  {
    url: "/pricing",
    title: "Pricing",
    dropdown: false,
  },
];

export function Header() {
  return (
    <header className="sticky top-0  w-full h-[80px] border-b border-b-gray-100 z-50 bg-white flex items-center">
      <GridContainer className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Image src="/logo.png" width={142} height={32} alt="logo" />
          <nav className="flex items-center gap-8">
            {menuItems.map(({ url, title, dropdown }, index) => (
              <ItemMenu
                key={index}
                url={url}
                title={title}
                hasDropdown={dropdown}
              />
            ))}
          </nav>
        </div>
        <div>
          <Image src="/avatar.jpg" width={40} height={40} alt="Avatar" />
        </div>
      </GridContainer>
    </header>
  );
}
