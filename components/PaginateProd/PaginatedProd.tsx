/* eslint-disable prettier/prettier */
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import Link from 'next/link';

const licores = [
  {
    name: 'Licor 1',
    price: '$99.99',
    img: '/licor1.webp',
  },
  {
    name: 'Licor 2',
    price: '$99.99',
    img: '/licor1.webp',
  },
  {
    name: 'Licor 3',
    price: '$99.99',
    img: '/licor1.webp',
  },
  {
    name: 'Licor 4',
    price: '$99.99',
    img: '/licor1.webp',
  },
  {
    name: 'Licor 5',
    price: '$99.99',
    img: '/licor1.webp',
  },
  {
    name: 'Licor 6',
    price: '$99.99',
    img: '/licor1.webp',
  },
  {
    name: 'Licor 7',
    price: '$99.99',
    img: '/licor1.webp',
  },
  {
    name: 'Licor 8',
    price: '$99.99',
    img: '/licor1.webp',
  },
  {
    name: 'Licor 9',
    price: '$99.99',
    img: '/licor1.webp',
  },
  {
    name: 'Licor 1',
    price: '$99.99',
    img: '/licor2.webp',
  },
  {
    name: 'Licor 2',
    price: '$99.99',
    img: '/licor2.webp',
  },
  {
    name: 'Licor 3',
    price: '$99.99',
    img: '/licor2.webp',
  },
  {
    name: 'Licor 4',
    price: '$99.99',
    img: '/licor2.webp',
  },
  {
    name: 'Licor 5',
    price: '$99.99',
    img: '/licor2.webp',
  },
  {
    name: 'Licor 6',
    price: '$99.99',
    img: '/licor2.webp',
  },
  {
    name: 'Licor 7',
    price: '$99.99',
    img: '/licor2.webp',
  },
  {
    name: 'Licor 8',
    price: '$99.99',
    img: '/licor2.webp',
  },
  {
    name: 'Licor 9',
    price: '$99.99',
    img: '/licor2.webp',
  },
  {
    name: 'Licor 1',
    price: '$99.99',
    img: '/licor3.webp',
  },
  {
    name: 'Licor 2',
    price: '$99.99',
    img: '/licor3.webp',
  },
  {
    name: 'Licor 3',
    price: '$99.99',
    img: '/licor3.webp',
  },
  {
    name: 'Licor 4',
    price: '$99.99',
    img: '/licor3.webp',
  },
  {
    name: 'Licor 5',
    price: '$99.99',
    img: '/licor3.webp',
  },
  {
    name: 'Licor 6',
    price: '$99.99',
    img: '/licor3.webp',
  },
  {
    name: 'Licor 7',
    price: '$99.99',
    img: '/licor3.webp',
  },
  {
    name: 'Licor 8',
    price: '$99.99',
    img: '/licor3.webp',
  },
  {
    name: 'Licor 9',
    price: '$99.99',
    img: '/licor3.webp',
  },
];

export default function PaginatedProd({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = licores.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(licores.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % licores.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="w-auto grid grid-cols-3 gap-20 py-20">
        {currentItems.map((licor) => (
          <Link href="/detail">
            <div
              className="flex items-center justify-center flex-col w-48"
              key={licor.name}
            >
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
          </Link>
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="flex flex-row w-96 justify-center items-center gap-4 mb-8 font-bold text-primary-100"
        activeClassName="text-bodebar-300"
      />
    </>
  );
}
