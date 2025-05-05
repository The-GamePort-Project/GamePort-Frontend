import HeaderMenuOption from "./features/HeaderMenuOption";
import { headerMenuOptions } from "./header-data";
import styles from "./Header.module.scss";
interface HeaderProps {
  theme?: string;
  logout: () => void;
  isLoggedIn?: boolean;
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
          md:flex-row md:justify-around 
            `}
          >
            {headerMenuOptions
              .filter((item) => {
                if (item.needsAuth) return props.isLoggedIn;
                if (item.hideWhenLoggedIn) return !props.isLoggedIn;
                return true;
              })
              .map((item, index) => (
                <li key={index}>
                  <HeaderMenuOption {...{ item }} />
                </li>
              ))}
            {props.isLoggedIn && (
              <li>
                <button onClick={props.logout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      </section>
    </header>
  );
}
export default Header;
