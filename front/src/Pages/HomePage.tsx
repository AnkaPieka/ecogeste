import HomePageSectionPresentation from '../components/Molecules/HomePageSectionPrésentation/homePageSectionPrésentation';

import NavBar from '../components/Organisms/NavBar';
import Footer from '../components/Organisms/Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HomePageSectionPresentation></HomePageSectionPresentation>
      <Footer />
    </div>
  );
};

export default HomePage;
