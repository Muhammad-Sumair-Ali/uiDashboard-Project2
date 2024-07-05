import { Link } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
<div>
  <Link to="/">Login</Link>
  <Link to="/">Sign</Link>
  <Link to="/">Home</Link>
  <Link to="/">Orders</Link>
</div>
const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: false },
  { name: 'Mails', href: '/orders', current: false },
  { name: 'Login', href: '/login', current: false },
  { name: 'Signup', href: '/signup', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const AuthLinks = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800 mt-10 mb-2 z-50">
      <div className="mx-auto ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
           
          </div>
          <div className="flex flex-1 items-center justify-center ">
          
            <div className="">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        
        </div>
      </div>

      
    </Disclosure>
  )
}
