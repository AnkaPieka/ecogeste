import HomePageSectionPresentation from '../components/Molecules/HomePageSectionPrésentation/homePageSectionPrésentation';

import NavBar from '../components/Organisms/NavBar';
import Footer from '../components/Organisms/Footer/Footer';
import OpinionsCarousel from '../components/Organisms/OpinionsCarousel/OpinionsCarousel';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HomePageSectionPresentation></HomePageSectionPresentation>
      {/* <OpinionsCarousel></OpinionsCarousel> */}
      <Footer />
    </div>
  );
};

export default HomePage;
