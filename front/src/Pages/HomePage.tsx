import HomePageSectionPresentation from '../components/Molecules/HomePageSectionPrésentation/homePageSectionPrésentation';
import NavBar from '../components/Organisms/NavBar';
import Footer from '../components/Organisms/Footer/Footer';
import OpinionsSection from '../components/Templates/OpinionsSection/OpinionsSection';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HomePageSectionPresentation />
      <OpinionsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
