import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-iceBlue text-foreground shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="mr-4"
          />
        </div>

        <nav className="space-x-8 text-primaryBlue text-lg ">
          <Link href="/" className="hover:text-primaryGreen hover:font-bold transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-primaryGreen hover:font-bold transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="hover:text-primaryGreen hover:font-bold transition-colors"
          >
            Services
          </Link>
          <Link
            href="/packages"
            className="hover:text-primaryGreen hover:font-bold transition-colors"
          >
            Packages
          </Link>
          <Link
            href="/destinations"
            className="hover:text-primaryGreen hover:font-bold transition-colors"
          >
            Top Destinations
          </Link>
          <Link
            href="/contact"
            className="hover:text-primaryGreen hover:font-bold transition-colors"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
