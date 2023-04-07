import Navigation from "../organisms/Navigation";
import HeroSection from "../organisms/HeroSection";
import GridGallery from "../organisms/GridGallery";

const temporaryDataForGridGallery = {
  title: "NEW ARRIVALS",
  itemsList: [],
  viewAllLink: "/collections/new-arrivals",
};

const HomepageTemplate = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <GridGallery
        title={temporaryDataForGridGallery.title}
        itemsList={temporaryDataForGridGallery.itemsList}
        viewAllLink={temporaryDataForGridGallery.viewAllLink}
      />
    </div>
  );
};

export default HomepageTemplate;
