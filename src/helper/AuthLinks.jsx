import { Link, useLocation } from "react-router-dom";
import { Disclosure } from '@headlessui/react';
import { useAuth } from "../context/authContext";

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: false },
  { name: 'Orders', href: '/orders', current: false },
  { name: 'Login', href: '/login', current: false },
  { name: 'Signup', href: '/signup', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const AuthLinks = () => {
  const [auth] = useAuth();
  let location = useLocation().pathname;

  const checkUser = auth.token
    ? navigation.filter(item => item.name !== 'Login' && item.name !== 'Signup')
    : navigation;

  return (
    <Disclosure as="nav" className="bg-white-800 mt-10 mb-2 z-50">
      <div className="mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="border-2 p-2 rounded-lg">
              <div className="flex space-x-4">
                {checkUser.map((item) => {
                  const isActive = location === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={classNames(
                        isActive ? 'bg-gray-900 text-white' : 'text-black-700 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};
