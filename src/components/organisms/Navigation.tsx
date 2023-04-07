import Logo from "../../assets/logo.png";

const Navigation = () => {
  return (
    <nav className="flex">
      <ul className="">
        <li className="">
          <a href="/menu">
            <img src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/null/external-mobile-application-hamburger-menu-setting-interface-basic-regular-tal-revivo.png" />
          </a>
        </li>
      </ul>
      <div>
        <a href="/">
          <img src={Logo} alt="Effortless" />
        </a>
      </div>
      <ul className="flex">
        <li className="">
          <a href="/search">
            {/* <img src="https://img.icons8.com/ios/32/null/search--v1.png" /> */}
            <img src="" />
          </a>
        </li>
        <li className="">
          <a href="/wishlist">
            <img src="https://img.icons8.com/windows/32/null/hearts.png" />
          </a>
        </li>
        <li className="">
          <a href="cart">
            <img src="https://img.icons8.com/material-outlined/32/null/shopping-cart--v1.png" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
