import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Dashboard", path: "/dashboard", current: false },
  { name: "Orders", path: "/orders", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gray-100 text-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="ml-10 flex items-baseline space-x-4 rounded-md">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? "bg-gray-600 text-white"
                          : "text-indigo-800 hover:bg-gray-600 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Disclosure>

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 min-h-full">
          {/* Main content goes here */}
        </div>
      </main>
    </div>
  );
}
