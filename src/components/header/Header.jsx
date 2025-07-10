import Link from "next/link";
import Navbar from "./Navbar";
import UserActions from "./UserActions";
import MobileMenu from "./MobileMenu";
import { getDictionary } from "@/dictionaries";
import MobileMenuToggle from "./MobileMenuToggle";
import Image from "next/image";

export default async function Header({ locale }) {
  const { navigation } = await getDictionary(locale);

  const navLinks = [
    { id: 1, title: navigation.home, href: "/" },
    { id: 2, title: navigation.about, href: "/about" },
    { id: 3, title: navigation.services, href: "/services" },
    { id: 4, title: navigation.gallery, href: "/recruitment" },
    { id: 5, title: navigation.clients, href: "/clients" },
     {
      id: 6,
      title: navigation.product,
      href: "/ourgroup",
    },
    { id: 7, title: navigation.contact, href: "/contact" },
  ];

  return (
    <header className="fixed flex items-center z-50 left-0 top-0 w-full bg-white shadow-lg h-[72px] text-lg">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <Link href={`/${locale}`} className="inline-block">
          <Image
            src="/images/alfarhanwhite.png"
            alt="AL Farhan Logo"
            width={35}
            height={12}
            className="h-auto w-auto object-contain"
          />
        </Link>

        <Navbar navLinks={navLinks} locale={locale} />
        <div className="flex lg:hidden">
          <MobileMenu navLinks={navLinks} locale={locale} />
        </div>

        <div className="flex justify-between items-center gap-3">
          <UserActions locale={locale} />
          <div className="block lg:hidden">
            <MobileMenuToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
