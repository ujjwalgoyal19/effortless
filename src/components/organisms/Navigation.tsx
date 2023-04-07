import Logo from "../../assets/logo.png";

const Navigation = () => {
  return (
    <div className="fixed top-0 w-full">
      <nav className="flex items-center justify-between px-4 py-4">
        <ul className="">
          <li className="">
            <a href="/menu">
              <img src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/null/external-mobile-application-hamburger-menu-setting-interface-basic-regular-tal-revivo.png" />
            </a>
          </li>
        </ul>
        <div className="flex items-center">
          <a href="/">
            <img src={Logo} alt="Effortless" className="h-10" />
          </a>
        </div>
        <ul className="flex gap-4">
          <li className="">
            <a href="/search">
              <img src="https://img.icons8.com/ios/24/null/search--v1.png" />
            </a>
          </li>
          <li className="">
            <a href="/wishlist">
              <img src="https://img.icons8.com/windows/24/null/hearts.png" />
            </a>
          </li>
          <li className="">
            <a href="cart">
              <img src="https://img.icons8.com/material-outlined/24/null/shopping-cart--v1.png" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
