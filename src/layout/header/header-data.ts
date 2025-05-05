interface HeaderMenuOption {
  label: string;
  link: string;
  needsAuth?: boolean;
  hideWhenLoggedIn?: boolean;
}

export const headerMenuOptions: HeaderMenuOption[] = [
  {
    label: "Profile",
    link: "/profile",
    needsAuth: true,
  },
  { label: "Settings", link: "/settings", needsAuth: true },
  { label: "Home", link: "/", needsAuth: false },
  { label: "Login", link: "/login", needsAuth: false, hideWhenLoggedIn: true },
  {
    label: "Register",
    link: "/register",
    needsAuth: false,
    hideWhenLoggedIn: true,
  },
  { label: "Games", link: "/games", needsAuth: false },
  { label: "My Profile", link: "/my-profile", needsAuth: true },
];
