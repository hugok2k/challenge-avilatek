/* eslint-disable prettier/prettier */
import Banner from '../components/Banner/Banner';
import BestSellers from '../components/BestSellers/BestSellers';
import Footer from '../components/Footer/Footer';
import Licores from '../components/Licores/Licores';
import Loremipsum from '../components/Loremipsum/Loremipsum';

function HomePage() {
  return (
    <div className="flex items-center flex-col justify-center">
      <main className="h-screen">
        <Banner left=" " right=" " indi />
        <BestSellers />
        <Loremipsum />
        <Licores />
        <Footer />
      </main>
    </div>
  );
}

export default HomePage;
