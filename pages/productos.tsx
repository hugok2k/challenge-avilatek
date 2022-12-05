/* eslint-disable prettier/prettier */

import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import Prod from '../components/Prod/Prod';

export default function Productos() {
  return (
    <section className="w-full">
      <div className="w-full h-96 bg-[url('/banner_productos.webp')] flex justify-center items-center">
        <span className="text-white font-bold text-5xl">PRODUCTOS</span>
      </div>
      <div className="flex flex-row ">
        <Sidebar />
        <Prod />
      </div>
      <Footer />
    </section>
  );
}
