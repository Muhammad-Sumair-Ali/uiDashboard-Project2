import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Button } from "@/components/ui/button"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  CircleUser,
  LucideLogIn,
  Search,
  Users,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { _useAuth } from '../../action/_useAuth';




const Navbar = () => {
  const [ auth ,setAuth] = useAuth()
 const {handleLogout:logoutUser} = _useAuth()
  const user = auth
  
  const navigation = [
    { name: 'Product' },
    { name: 'Features' },
    { name: 'Marketplace'},
    { name: 'Company' },
  ] 
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return(
    <>
      <div>
        <header className="sticky top-0 absolute z-50 ">
          <nav  className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">shadcn/ui</span>
                <img
                  className="h-5 w-auto inline-block mx-2"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAADj4+Pl5eXf39/o6Ojc3NxJSUlDQ0NGRkbU1NTX19dAQEDv7+9RUVHd3d0zMzM4ODjOzs47Ozv4+PhfX19OTk5aWlpUVFQuLi7y8vJiYmJpaWlsbGzCwsIiIiKsrKygoKC2trZ/f3++vr6dnZ0TExOKiooZGRkgICALCwspKSmSkpKWZ1X9AAAEyUlEQVR4nO3diXLiMAwG4JgrARLKkXJDKbSl1/s/3wa6O0tLrOkMshX/0f8CsqqPlCOOoyjsZPtNOhzNHzu59ErcZLmLzVceDk3pxbhIvjb/M+hJL4c/zbm5zMNYekHcaa7M96Rgr8V8bn5mJ70m1jSvGzRxW3pVjLkien4lbqWXxZcSolhMy4ie8ii9MK6UEkXq0EIUR6mNqDEfGP/zGzaixswz6cVxJB9YG8R4GTaIBgfSi+MIQdQkfenVMYQiukC4zFBEFy3p1TGEIpoiTLDeRBvSq2NI416Jhh0lGnqUaOjBJzpFJ0o1iE40QZigEg09SjT0KNHQU2uiQwSirToTHSI02KJegwh3BrVm6ERje4MYRKkGlWgAUaKhhyLaRZjgUokGHiUaepRo6CGJItyEX2+iCBOsN1GEu+/vlGjguUMnSl1FY4QJLrvoRIkGRwhEqasoPNERQoMddKIdJRp48IlaN2cp0TCiREOPEg09+EQTdKJUg0o0gNSa6ASd6BRhghk1QYQGlWjoUaKhB59oCk60TzWI8ECZPrHFdYrwNBKSKEKDSjT0KNHQo0RDD0U0VaIBhCKaIjRYa6IDhAmKE82eds97h4WEieZPf+/yeHl29PVBn9ji6oFo+/i/3NTJs6GFiS43lwVfHLQoTPTnD8z8z9qXJrr5WXS95K2QTSpE9Cu8Q+xTDfon+jVEzgqVI3rKB2OFChIt8s5XQZqo7ZcDtgqVJMo5w2oSLbJgqtCTJUr8enfkqdAjiM47PDWItNfW6q88P/20iQkm7hvM7A2aA8v5QRTRRJSombF8gKouUTO8Y6lQXaI82/grTHTK8vetMlGW8vhER0SDzJ89S0J9Y8JElNji6oFo0/1VlJqgEr05JFGWCdaaaBedaFeJ3hyK6Aid6Aid6IDl2KcKEx2yNKhE3Yb6Us890ZnwVVSJ/ib1Jsryn5aM9ZRc44Wo+wYzqkGWb357Q6JBJXpzPBAlJhijE40hiBIPCpi5P+RUmKj7BmtNdK5Ef1VBiTpNRryR4iE6ri7RCTpRng2o4woTZTn2SZgodda4Ev1VlKjbkERZGqw3UZZ7qch4IErdS6VEb04bnSj1cRSDKHG+IxPRhb3C1ANRqkHnRKeyRGfOid7LEk1ZGmxQE3R/iitFNOUhSr0G4Ym6n6AHotQEhYmy7EtRom6jRG+OEnUbJXpzpIkS5Wcsh+eNidv9pImyNEgRHXggSpzI4p7oQPgqikCUOpmMhyj1iV6YaMJCtEH8H/RB1PlVND/aK0AQjVof9gkiXEWjyD5CCKJFrLfjrWSJJmzHAD/YJohwFT3nxdIgCNHINkMYokVK38/w/PpBxhPRIs/YRIv036CJFskPV0TdH9fuj2hZtbkHovb3UdxEz+l8+3i2dj9BimjXSfn+RcWj+4d1UES7rh4ptV2NXs37W3Jgf5DidSii9+4A5Z3tfr91fw2VIOo5IkR9hiSKcKZOg5ogQoPX7y4uGnS/AdVD9uBEo8j+IHMIolGUgRMt3leAE42iHTbRyNohCtHIphSGaJF2WYMxUINRVLJRMsYhesoTNNFTrp5njEX0lP73TRRgRM9pX2402sBN8JTm57/vvSaf7veGyaT5uJoMJ6u9r28s/gDnI2itu3Hs/QAAAABJRU5ErkJggg=="
                  alt="" 
                /><b className='text-[19px]'> 
                shadcn/ui
                </b>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="ml-auto flex-1 sm:flex-initial">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                    />
                  </div>
                </form>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full">
                      {auth.token ? <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar> : <CircleUser className="h-8 w-8" />}

                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <div style={{backgroundColor:"#f1f1f1",borderRadius:"8px",padding:"10px",boxSizing:"border-box"}} className="userProfile h-10 flex items-center space-x-4 p-4 mt-5 rounded">
                        { auth.token ? (
                          <div className="flex items-center space-x-3">
                           
                            <Avatar>
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <label className="text-sm font-medium" htmlFor="username">
                              {user?.fullName}
                            </label>
                          </div>
                        ) : (
                          <p className="flex items-center space-x-3">
                            <span>Please log in to view your profile.</span>
                            <Link to="/login">
                              <Button className="btn btn-primary" variant="primary">
                                Login
                              </Button>
                            </Link>
                          </p>
                        )}
                      </div>
                    </DropdownMenuItem>
                   
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>{
                    auth.token ? ( <div
                             
                             className="text-red-500 inline-block cursor-pointer"
                             data-toggle="tooltip"
                             data-placement="top"
                             title="LOG OUT"
                             onClick={logoutUser}
                           >
                             <LucideLogIn style={{display:"inline-block",marginRight:"5px"}} />Logout
                           </div>) : "Must be logged in to view this page"
                    }</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            
            </div>
          </nav>
          <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Mr Sumair</span>
                  <img
                    className="h-5 w-auto"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAADj4+Pl5eXf39/o6Ojc3NxJSUlDQ0NGRkbU1NTX19dAQEDv7+9RUVHd3d0zMzM4ODjOzs47Ozv4+PhfX19OTk5aWlpUVFQuLi7y8vJiYmJpaWlsbGzCwsIiIiKsrKygoKC2trZ/f3++vr6dnZ0TExOKiooZGRkgICALCwspKSmSkpKWZ1X9AAAEyUlEQVR4nO3diXLiMAwG4JgrARLKkXJDKbSl1/s/3wa6O0tLrOkMshX/0f8CsqqPlCOOoyjsZPtNOhzNHzu59ErcZLmLzVceDk3pxbhIvjb/M+hJL4c/zbm5zMNYekHcaa7M96Rgr8V8bn5mJ70m1jSvGzRxW3pVjLkien4lbqWXxZcSolhMy4ie8ii9MK6UEkXq0EIUR6mNqDEfGP/zGzaixswz6cVxJB9YG8R4GTaIBgfSi+MIQdQkfenVMYQiukC4zFBEFy3p1TGEIpoiTLDeRBvSq2NI416Jhh0lGnqUaOjBJzpFJ0o1iE40QZigEg09SjT0KNHQU2uiQwSirToTHSI02KJegwh3BrVm6ERje4MYRKkGlWgAUaKhhyLaRZjgUokGHiUaepRo6CGJItyEX2+iCBOsN1GEu+/vlGjguUMnSl1FY4QJLrvoRIkGRwhEqasoPNERQoMddKIdJRp48IlaN2cp0TCiREOPEg09+EQTdKJUg0o0gNSa6ASd6BRhghk1QYQGlWjoUaKhB59oCk60TzWI8ECZPrHFdYrwNBKSKEKDSjT0KNHQo0RDD0U0VaIBhCKaIjRYa6IDhAmKE82eds97h4WEieZPf+/yeHl29PVBn9ji6oFo+/i/3NTJs6GFiS43lwVfHLQoTPTnD8z8z9qXJrr5WXS95K2QTSpE9Cu8Q+xTDfon+jVEzgqVI3rKB2OFChIt8s5XQZqo7ZcDtgqVJMo5w2oSLbJgqtCTJUr8enfkqdAjiM47PDWItNfW6q88P/20iQkm7hvM7A2aA8v5QRTRRJSombF8gKouUTO8Y6lQXaI82/grTHTK8vetMlGW8vhER0SDzJ89S0J9Y8JElNji6oFo0/1VlJqgEr05JFGWCdaaaBedaFeJ3hyK6Aid6Aid6IDl2KcKEx2yNKhE3Yb6Us890ZnwVVSJ/ib1Jsryn5aM9ZRc44Wo+wYzqkGWb357Q6JBJXpzPBAlJhijE40hiBIPCpi5P+RUmKj7BmtNdK5Ef1VBiTpNRryR4iE6ri7RCTpRng2o4woTZTn2SZgodda4Ev1VlKjbkERZGqw3UZZ7qch4IErdS6VEb04bnSj1cRSDKHG+IxPRhb3C1ANRqkHnRKeyRGfOid7LEk1ZGmxQE3R/iitFNOUhSr0G4Ym6n6AHotQEhYmy7EtRom6jRG+OEnUbJXpzpIkS5Wcsh+eNidv9pImyNEgRHXggSpzI4p7oQPgqikCUOpmMhyj1iV6YaMJCtEH8H/RB1PlVND/aK0AQjVof9gkiXEWjyD5CCKJFrLfjrWSJJmzHAD/YJohwFT3nxdIgCNHINkMYokVK38/w/PpBxhPRIs/YRIv036CJFskPV0TdH9fuj2hZtbkHovb3UdxEz+l8+3i2dj9BimjXSfn+RcWj+4d1UES7rh4ptV2NXs37W3Jgf5DidSii9+4A5Z3tfr91fw2VIOo5IkR9hiSKcKZOg5ogQoPX7y4uGnS/AdVD9uBEo8j+IHMIolGUgRMt3leAE42iHTbRyNohCtHIphSGaJF2WYMxUINRVLJRMsYhesoTNNFTrp5njEX0lP73TRRgRM9pX2402sBN8JTm57/vvSaf7veGyaT5uJoMJ6u9r28s/gDnI2itu3Hs/QAAAABJRU5ErkJggg=="
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                      <form className="ml-auto flex-1 sm:flex-initial">
                        <div className="relative">
                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="search"
                            placeholder="Search products..."
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                          />
                        </div>
                      </form>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="secondary" size="icon" className="rounded-full">
                            <span className="sr-only">Toggle user menu</span>
                          </Button>
                          
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>My Account</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Settings</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      
                    </div>
                    <div style={{backgroundColor:"#f1f1f1",borderRadius:"8px",padding:"10px",boxSizing:"border-box"}} className="userProfile h-10 flex items-center space-x-4 p-4 mt-5 rounded">
                      {auth.token ? (
                        <div className="flex items-center space-x-3">
                          <div
                            className="text-red-500 text-3xl cursor-pointer"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="LOG OUT"
                            onClick={logoutUser}
                          >
                            <LucideLogIn />
                          </div>
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>

                          <label className="text-sm font-medium" htmlFor="username">
                            {user?.fullName}
                          </label>
                        </div>
                      ) : (
                        <p className="flex items-center space-x-3">
                          <span>Please log in to view your profile.</span>
                          <Link to="/login">
                            <Button className="btn btn-primary" variant="primary">
                              Login
                            </Button>
                          </Link>
                        </p>
                      )}
                    </div>
                    {user ? (<b>{user.fullName}</b>): <i>Login Required !!</i>}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>









        


        
      </div>
    </>
  )
}
export default Navbar;