import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <Popover className="relative bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#home">
              <span className="sr-only">Ihza's Portfolio</span>
              <h2 className="text-2xl text-white/90">IHZA</h2>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 ">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <a
              href="#"
              className="text-base font-medium text-white/90 hover:text-black"
            >
              Profile
            </a>

            <a
              href="#"
              className="text-base font-medium text-white/90 hover:text-gray-900"
            >
              About
            </a>

            <a
              href="#"
              className="text-base font-medium text-white/90 hover:text-gray-900"
            >
              Work Experience
            </a>

            <a
              href="#"
              className="text-base font-medium text-white/90 hover:text-gray-900"
            >
              Contact
            </a>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <h2>ini diujung kanan</h2>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="rounded-lg bg-black/75 backdrop-blur-xl backdrop-saturate-200 shadow-lg">
            <div className="px-5 pt-5 ">
              <Popover.Button className="absolute right-0 top-0 transform p-2 text-gray-400">
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="flex flex-col justify-center items-center gap-4">
                <a href="#" className="text-base font-medium text-white/90 ">
                  Pricing
                </a>

                <a href="#" className="text-base font-medium text-white/90 ">
                  Docs
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
