/* eslint-disable prettier/prettier */
import { MdOutlineAddShoppingCart } from 'react-icons/md';

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
];

export default function Licores() {
  return (
    <section className="w-full h-auto flex justify-center items-center flex-col">
      <div className="p-32 flex items-center justify-center flex-col">
        <h2 className="text-3xl text-primary-100 font-bold">LICORES</h2>
        <div className="border-bodebar-500 border-b-[3px] w-16 p-2" />
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 mb-16">
        {licores.map((licor) => (
          <div className="flex items-center justify-center flex-col w-56">
            <img src={licor.img} alt={licor.name} className="w-96" />
            <div className="flex justify-start flex-col items-start">
              <h3 className="text-center text-xl text-primary-500 font-bold">
                {licor.name}
              </h3>
              <div className="flex flex-row gap-8 items-center">
                <span className="text-primary-100 font-bold">
                  {licor.price}
                </span>
                <MdOutlineAddShoppingCart className="text-primary-100" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
