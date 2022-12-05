/* eslint-disable prettier/prettier */

import Footer from '../components/Footer/Footer';
import ProductDetail from '../components/ProductDetail/ProductDetail';

export default function Productos() {
  return (
    <section className="w-full">
      <div className="w-full h-96 bg-[url('/banner_productos.webp')] flex justify-center items-center">
        <span className="text-white font-bold text-5xl">PRODUCTO</span>
      </div>
      <ProductDetail />
      <Footer />
    </section>
  );
}
