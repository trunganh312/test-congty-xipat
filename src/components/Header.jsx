import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href='/'>
        <img
          src='https://flowbite.com/docs/images/logo.svg'
          className='mr-3 h-6 sm:h-9'
          alt='Flowbite React Logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarCollapse>
        <NavbarLink href='#' active>
          Home
        </NavbarLink>
        <NavbarLink href='#'>About</NavbarLink>
        <NavbarLink href='#'>Services</NavbarLink>
        <NavbarLink href='#'>Pricing</NavbarLink>
        <NavbarLink href='#'>Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
