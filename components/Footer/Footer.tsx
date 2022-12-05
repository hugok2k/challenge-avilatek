/* eslint-disable prettier/prettier */
import Link from 'next/link';
import Avilateksvg from './Avilateksvg';
// h-16 font-bold w-full justify-evenly bg-bodebar-400 text-white items-center flex flex-row flex-wrap content-evenly sm:h-12 sm:grid sm:grid-cols-7 sm:grid-rows-1 sm:gap-0 list-none

export default function Footer() {
  return (
    <footer className="w-full h-48 flex items-center justify-center flex-col bg-primary-400">
      <ul className="w-full h-10 flex flex-row justify-evenly items-center flex-wrap text-white gap-4 sm:h-12 sm:grid sm:grid-cols-6 sm:grid-rows-1 sm:gap-0 list-none">
        <li className="h-1/2 sm:h-full w-1/4 sm:w-auto hover:bg-primary-100 cursor-pointer">
          <Link
            href="/"
            className="h-full w-full text-center flex justify-center items-center text-xs lg:text-base"
          >
            INICIO
          </Link>
        </li>
        <li className="h-1/2 sm:h-full w-1/4 sm:w-auto hover:bg-primary-100 cursor-pointer">
          <Link
            href="/productos"
            className="h-full w-full text-center flex justify-center items-center text-xs lg:text-base"
          >
            PRODUCTOS
          </Link>
        </li>
        <li className="h-1/2 sm:h-full w-1/4 sm:w-auto hover:bg-primary-100 cursor-pointer">
          <Link
            href="/"
            className="h-full w-full text-center flex justify-center items-center text-xs lg:text-base"
          >
            NOSOTROS
          </Link>
        </li>
        <li className="h-1/2 sm:h-full w-1/4 sm:w-auto hover:bg-primary-100 cursor-pointer">
          <Link
            href="/"
            className="h-full w-full text-center flex justify-center items-center text-xs lg:text-base"
          >
            TERMINOS Y CONDICIONES
          </Link>
        </li>
        <li className="h-1/2 sm:h-full w-1/4 sm:w-auto hover:bg-primary-100 cursor-pointer">
          <Link
            href="/"
            className="h-full w-full text-center flex justify-center items-center text-xs lg:text-base"
          >
            PREGUNTAS FRECUENTES
          </Link>
        </li>
        <li className="h-1/2 sm:h-full w-1/4 sm:w-auto hover:bg-primary-100 cursor-pointer">
          <Link
            href="/"
            className="h-full w-full text-center flex justify-center items-center text-xs lg:text-base"
          >
            CUENTA
          </Link>
        </li>
      </ul>
      <div className="w-full h-auto flex flex-row justify-center items-center flex-wrap text-white font-normal">
        <span className="py-8 px-3 text-center">
          Copyright © 2020 Bodebar. Todos los Derechos Reservados. Desarrollado
          por Avila Tek
          <Avilateksvg />
        </span>
      </div>
    </footer>
  );
}
