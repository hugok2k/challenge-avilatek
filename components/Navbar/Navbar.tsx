/* eslint-disable prettier/prettier */
import Link from 'next/link';
import { MdShoppingCart, MdOutlineLogin } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Navbar() {
  return (
    <header className="flex flex-col w-full">
      <nav className="w-full">
        <div className="flex items-center justify-between flex-col lg:flex-row  px-16 py-6">
          <picture>
            <Link href="/">
              <img src="/logo.webp" alt="Logo" className="w-36" />
            </Link>
          </picture>
          <div className="flex flex-row justify-end items-center">
            <input
              className="focus-within:ring-0 border-0 border-b focus:outline-none sm:w-48 lg:w-[500px] border-[#d4d4d4]"
              type="text"
            />
            <AiOutlineSearch className="absolute mr-4 fill-primary-100 cursor-pointer" />
          </div>
          <div className="flex items-center gap-6 1 text-primary-100  leading-7">
            <Link
              href="/productos"
              className="font-bold hover:text-bodebar-500 lg:p-4"
            >
              PRODUCTOS
            </Link>
            <Link href="/moneda" className="font-bold hover:text-bodebar-500">
              MONEDA
            </Link>
            <button type="button" className="hover:text-bodebar-500">
              <MdShoppingCart size={24} />
            </button>
            <button type="button" className="hover:text-bodebar-500">
              <MdOutlineLogin size={24} />
            </button>
          </div>
        </div>

        <ul className="h-16 font-bold w-full justify-evenly bg-bodebar-400 text-white items-center flex flex-row flex-wrap content-evenly sm:h-12 sm:grid sm:grid-cols-7 sm:grid-rows-1 sm:gap-0 list-none">
          <li className="h-1/2 sm:h-full w-1/4 sm:w-auto hover:bg-bodebar-500 cursor-pointer">
            <Link
              href="/"
              className="h-full w-full text-center flex justify-center items-center text-xs lg:text-base"
            >
              WHISKY
            </Link>
          </li>
          <li className="h-1/2 sm:h-full w-1/4 sm:w-auto hover:bg-bodebar-500 cursor-pointer">
            <Link
              href="/"
              className="h-full w-full text-center flex justify-center items-center text-xs lg:text-base"
            >
              RON
            </Link>
          </li>
          <li className="h-1/2 sm:h-full w-1/4 sm:w-auto hover:bg-bodebar-500 cursor-pointer">
            <Link
              href="/"
              className="h-full w-full text-center flex justify-center items-center text-xs lg:text-base"
            >
              VINOS
            </Link>
          </li>
          <li className="h-1/2 sm:h-full w-1/4 sm:w-auto hover:bg-bodebar-500 cursor-pointer">
            <Link
              href="/"
              className="h-full w-full text-center flex justify-center items-center text-xs lg:text-base"
            >
              DESTILADOS
            </Link>
          </li>
          <li className="h-1/2 sm:h-full w-1/4 sm:w-auto hover:bg-bodebar-500 cursor-pointer">
            <Link
              href="/"
              className="h-full w-full text-center flex justify-center items-center text-xs lg:text-base"
            >
              LICORES
            </Link>
          </li>
          <li className="h-1/2 sm:h-full w-1/4 sm:w-auto hover:bg-bodebar-500 cursor-pointer">
            <Link
              href="/"
              className="h-full w-full text-center flex justify-center items-center text-xs lg:text-base"
            >
              OTROS
            </Link>
          </li>
          <li className="h-1/2 sm:h-full w-1/4 sm:w-auto hover:bg-bodebar-500 cursor-pointer">
            <Link
              href="/"
              className="h-full w-full text-center flex justify-center items-center text-xs lg:text-base"
            >
              OFERTAS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
