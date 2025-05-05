interface HeaderMenuOption {
  label: string;
  link: string;
  needsAuth?: boolean;
  hideWhenLoggedIn?: boolean;
  disabled: boolean;
}

export const headerMenuOptions: HeaderMenuOption[] = [
  { label: "Settings", link: "/settings", needsAuth: true, disabled: true },
  { label: "Home", link: "/", needsAuth: false, disabled: false },
  {
    label: "Login",
    link: "/auth/login",
    needsAuth: false,
    hideWhenLoggedIn: true,
    disabled: false,
  },
  {
    label: "Register",
    link: "/auth/register",
    needsAuth: false,
    hideWhenLoggedIn: true,
    disabled: false,
  },
  { label: "Games", link: "/games", needsAuth: false, disabled: false },
  { label: "My Profile", link: "/my-profile", needsAuth: true, disabled: true },
];
