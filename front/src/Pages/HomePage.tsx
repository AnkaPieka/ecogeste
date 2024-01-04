import HomePageSectionPresentation from '../components/Molecules/HomePageSectionPrésentation/homePageSectionPrésentation';
import Footer from '../components/Organisms/Footer/Footer';
import NavBar from '../components/Organisms/NavBar';
import OpinionsCarousel from '../components/Organisms/OpinionsCarousel/OpinionsCarousel';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HomePageSectionPresentation />
      {/* <OpinionsCarousel /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
