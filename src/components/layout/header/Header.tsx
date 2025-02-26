import React from 'react';
import HeaderMenuOption from './HeaderMenuOption';
import styles from '../../../sass/components/layout/Header.module.scss';
interface HeaderProps {
  theme?: string;
}
interface HeaderMenuOptions {
  label: string;
  link: string;
}
function Header(props: HeaderProps) {
  if (props.theme) {
    console.log('hey');
  }
  const headerMenuOptions: HeaderMenuOptions[] = [
    {
      label: 'Profile',
      link: '/profile',
    },
    { label: 'Settings', link: '/settings' },
  ];
  return (
    <header id={'header'} className={styles.header}>
      <section id={'left-section-icon'}>
        <div>
          <span className="material-symbols-outlined">stat_minus_3</span>
        </div>
      </section>
      <section id={'middle-section-navigation'}>
        <nav>
          <ul>
            {headerMenuOptions.map((item, index) => (
              <li key={index}>
                <HeaderMenuOption {...{ item }} />
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
}
export default Header;
