import HeaderMenuOption from "./features/HeaderMenuOption";
import { headerMenuOptions } from "./header-data";
import styles from "./Header.module.scss";
import InfoModal from "../../components/modals/infoModal/infoModal";
import { useState } from "react";
import { useNavigator } from "../../hooks/useNavigator";
interface HeaderProps {
  theme?: string;
  logout: () => void;
  isLoggedIn?: boolean;
}

function Header(props: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const { goHome } = useNavigator();
  return (
    <>
      <header id={"header"} className={styles.header}>
        <section id={"left-section-icon"}>
          <div
            className="flex justify-center items-center"
            onClick={goHome}
            style={{ cursor: "pointer" }}
          >
            <img
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "10px",
              }}
              src="gameport-main-logo.webp"
              alt="Logo"
              className={styles.logo}
              onClick={() => {
                window.location.href = "/";
              }}
            />
            The Gameport
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
                    <HeaderMenuOption
                      {...{ item }}
                      onClickDisabled={openModal}
                    />
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
      <InfoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={"Feature not implemented yet"}
      ></InfoModal>
    </>
  );
}
export default Header;
