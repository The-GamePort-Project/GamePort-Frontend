interface HeaderMenuOption {
  label: string;
  link: string;
}

export const headerMenuOptions: HeaderMenuOption[] = [
  {
    label: 'Profile',
    link: '/profile',
  },
  { label: 'Settings', link: '/settings' },
  { label: 'Home', link: '/' },
  { label: 'Login', link: '/login' },
];
