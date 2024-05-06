import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Kobodrop from '../assets/logos/kobodrop_logo.svg';
import ButtonLink from '../common/ButtonLink';
import { motion } from 'framer-motion';

function Nav() {
  const textLinkClasses =
    'text-gray-500 hover:text-gray-900 active:text-gray-400';

  const navLinks = [
    { href: '#features', children: 'Features' },
    { href: '#partners', children: 'Partners' },
    { href: '#reviews', children: 'Reviews' },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex h-[15vh] max-w-7xl items-center justify-between px-8 lg:px-12 xl:m-auto"
          >
            <div className="flex">
              <ButtonLink
                href="#"
                children={<img src={Kobodrop} alt="NexSafe logo" />}
              />
              <div className="ml-4 hidden items-center space-x-4 sm:ml-6 sm:flex lg:ml-8 lg:space-x-8">
                {navLinks.map((link, index) => (
                  <ButtonLink
                    key={index}
                    href={link.href}
                    children={link.children}
                    className={textLinkClasses}
                  />
                ))}
              </div>
            </div>
            <ButtonLink
              href="https://play.google.com"
              target="_blank"
              children={'Install NexSafe'}
              className="active:bg hidden rounded-xl bg-gray-800 px-5 py-3 text-white hover:bg-gray-900 active:bg-gray-600 sm:flex"
            />
            <Disclosure.Button className="rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white sm:hidden">
              {open ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </Disclosure.Button>
          </motion.div>
          <Disclosure.Panel className="space-y-1 px-4 sm:hidden">
            {navLinks.map((link, index) => (
              <Disclosure.Button
                className="block"
                as="a"
                href="#features"
                key={index}
              >
                {link.children}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
