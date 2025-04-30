import HeaderMenuOption from "./features/HeaderMenuOption";
import { headerMenuOptions } from "./header-data";
import styles from "./Header.module.scss";
interface HeaderProps {
  theme?: string;
}

function Header(props: HeaderProps) {
  if (props.theme) {
    console.log("hey");
  }

  return (
    <header id={"header"} className={styles.header}>
      <section id={"left-section-icon"}>
        <div>
          <span className="material-symbols-outlined">stat_minus_3</span>
        </div>
      </section>
      <section id={"middle-section-navigation"} className={styles.headerMenu}>
        <nav>
          <ul
            className={`flex
          sm:flex-col 
          md:flex-row md:ejustify-around 
            `}
          >
            {headerMenuOptions.map((item, index) => (
              <li key={index} id={`header-menu-option-${index}`}>
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
