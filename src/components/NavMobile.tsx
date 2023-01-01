import React from "react";
import toggle from "./NavMobile.module.scss";
import clsx from "clsx";
import { Logo } from "./Logo";
import nav from "./Nav.module.scss";

interface NavMobileProps {
  className?: string;
  children: React.ReactNode;
}

interface NavToggleButtonProps {
  isToggled: boolean;
  setIsToggled: (isToggled: boolean) => void;
}

export const NavMobile = ({ children }: NavMobileProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className={nav.mobile}>
      <Logo />
      <NavToggleButton isToggled={isOpen} setIsToggled={setIsOpen} />
      <div className={clsx(nav.links, isOpen && nav.open)}>{children}</div>
    </nav>
  );
};

const NavToggleButton = ({ isToggled, setIsToggled }: NavToggleButtonProps) => {
  return (
    <button
      aria-label={`${isToggled ? "open sidebar" : "close sidebar"}`}
      onClick={() => setIsToggled(!isToggled)}
      className={toggle.navToggle}
      id="nav-toggle"
    >
      <div
        className={clsx(toggle.navToggleIcon, isToggled && toggle.sidebar)}
      />
    </button>
  );
};
