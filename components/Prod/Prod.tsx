/* eslint-disable prettier/prettier */
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import PaginatedProd from '../PaginateProd/PaginatedProd';

const licores = [
  {
    name: 'Licor 1',
    price: '$99.99',
    img: '/licor1.webp',
  },
  {
    name: 'Licor 2',
    price: '$99.99',
    img: '/licor2.webp',
  },
  {
    name: 'Licor 3',
    price: '$99.99',
    img: '/licor3.webp',
  },
  {
    name: 'Licor 4',
    price: '$99.99',
    img: '/licor4.webp',
  },
  {
    name: 'Licor 1',
    price: '$99.99',
    img: '/licor1.webp',
  },
  {
    name: 'Licor 2',
    price: '$99.99',
    img: '/licor2.webp',
  },
  {
    name: 'Licor 3',
    price: '$99.99',
    img: '/licor3.webp',
  },
  {
    name: 'Licor 4',
    price: '$99.99',
    img: '/licor4.webp',
  },
  {
    name: 'Licor 4',
    price: '$99.99',
    img: '/licor4.webp',
  },
];

export default function Prod() {
  return (
    <section className="w-9/12 h-auto flex flex-col justify-center items-center p-2">
      <div className="flex flex-row justify-between w-full">
        <span className="text-2xl font-bold mt-16 ml-20">PRODUCTOS</span>
        <form className="flex flex-row mt-14">
          <label className="cursor-pointer flex flex-col justify-center items-center">
            <select className="pr-4 border-none focus-within:ring-0">
              <option>Relevancia</option>
              <option>Menor precio</option>
              <option>Mayor precio</option>
            </select>
            <div className="border-bodebar-300 border-b-2 w-24" />
          </label>
          <label className=" cursor-pointer flex flex-col justify-center items-center focus-within:ring-0">
            <select className="pr-6 border-none">
              <option>8 por página</option>
              <option>9 por página</option>
              <option>10 por página</option>
            </select>
            <div className="border-bodebar-300 border-b-2 w-28" />
          </label>
        </form>
      </div>
      <PaginatedProd itemsPerPage={9} />
    </section>
  );
}
