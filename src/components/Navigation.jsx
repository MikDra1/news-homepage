import { useState } from "react";
import styles from "./Navigation.module.css";
import { useHomepage } from "../contexts/NewsHomepageProvider";
// import Button from "./Button";

function Navigation() {
  const { isMobile } = useHomepage();
  const [imageUrl, setImageUrl] = useState("./images/icon-menu.svg");
  const isOpen = imageUrl === "./images/icon-menu-close.svg";

  function handleOpenNav() {
    setImageUrl((url) =>
      url === "./images/icon-menu.svg"
        ? "./images/icon-menu-close.svg"
        : "./images/icon-menu.svg"
    );
  }

  return (
    <>
    <div className={`${styles.overlay} ${isOpen ? styles.visibleOverlay : ''} `}></div>
      {isMobile ? (
        <header className={styles.headerMobile}>
          <img src="./images/logo.svg" alt="" />
          <img src={imageUrl} alt="" onClick={handleOpenNav} />
          <div
            className={`${isOpen ? styles.mobileUlOpen : ""} ${
              styles.headerMobileUl
            }`}
          >
            <div>home</div>
            <div>new</div>
            <div>popular</div>
            <div>trending</div>
            <div>categories</div>
            {/* <Button>LOGIN</Button> */}
            <div className={styles.headerMobileSocials}>
              <img src="./images/icon-facebook.svg" alt="" />
              <img src="./images/icon-twitter.svg" alt="" />
            </div>
          </div>
        </header>
      ) : (
        <header className={styles.headerDesktop}>
          <img src="./images/logo.svg" alt="" />
          <div className={styles.headerDesktopEnd}>
            <ul>
              <li>home</li>
              <li>new</li>
              <li>popular</li>
              <li>trending</li>
              <li>categories</li>
            </ul>
            {/* <Button>LOGIN</Button> */}
          </div>
        </header>
      )}
    </>
  );
}

export default Navigation;
