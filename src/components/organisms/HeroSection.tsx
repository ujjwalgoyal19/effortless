import BannerImageOne from "../../assets/BI/blue_720x.webp";

// Think of this data as coming from an API from backend
const HeroCategoryData = [
  {
    thumb:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1661328488792Untitleddesign_11_150x.png?v=1662802530",
    title: "Perfumes",
  },
  {
    thumb:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1661328488792Untitleddesign_11_150x.png?v=1662802530",
    title: "Shirts",
  },
  {
    thumb:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1661328488792Untitleddesign_11_150x.png?v=1662802530",
    title: "T-Shirts",
  },
  {
    thumb:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1661328488792Untitleddesign_11_150x.png?v=1662802530",
    title: "Co-ords",
  },
  {
    thumb:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1661328488792Untitleddesign_11_150x.png?v=1662802530",
    title: "Jeans",
  },
  {
    thumb:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1661328488792Untitleddesign_11_150x.png?v=1662802530",
    title: "Watches",
  },
]; // This is an array

const HeroSection = () => {
  return (
    <div>
      <a href="/hello">
        <img src={BannerImageOne} />
      </a>
      <div className="flex flex-1 overflow-x-scroll">
        <ul className="flex px-4 py-2" style={{ width: "100rem" }}>
          {HeroCategoryData.map((item) => {
            return (
              <li className="mr-2">
                <div className="w-fit">
                  <div className="w-fit">
                    <img src={item.thumb} className="w-36" />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
