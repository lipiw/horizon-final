import { Bars3Icon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import Logo from '../app/favicon.ico';
import NextLink from "next/link";
import Image from 'next/image';

const mainMenuItems: { text: string; href: string }[] = [
  {
    text: 'Sobre nós',
    href: '/about',
  },
];

export function HeaderSection() {
  return (
    <header className="shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <NextLink href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Event Horizon</span>
            <Image className="h-32 w-32" src={Logo} alt="logo" />
          </NextLink>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {mainMenuItems.map(({ text, href }) => (
            <NextLink
              className='text-sm font-semibold leading-6 text-gray-900'
              key={href}
              href={href}
            >
              {text}
            </NextLink>
          ))}
        </div>

        <div className="flex flex-1 justify-end">
          <NextLink href="/phone">
            <span className="sr-only">Aplicativo</span>
            <span className="relative inline-block">
              <DevicePhoneMobileIcon className="h-6 w-6"></DevicePhoneMobileIcon>
            </span>
          </NextLink>

          <button
            type="button"
            className="ml-5 inline-flex items-center justify-center rounded-md text-gray-700 lg:hidden"
            // onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <span className="relative inline-block">
              <Bars3Icon className="-mt-1 h-6  w-6" aria-hidden="true" />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
