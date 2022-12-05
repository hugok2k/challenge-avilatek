/* eslint-disable prettier/prettier */

import ProductosSimilares from '../ProductosSimilares/ProductosSimilares';

export default function ProductDetail() {
  return (
    <section className="w-full h-auto p-20 px-46 flex flex-col justify-center items-center">
      <div className="flex flex-row  justify-center gap-14 items-center w-[860px]">
        <div className="text-sm flex flex-col justify-center items-center ">
          <span className="text-primary-200 font-bold uppercase">
            Inicio / Productos /{' '}
            <span className="text-bodebar-400">
              Buchanans Special Reserve 18 años
            </span>
          </span>
          <img src="/bestsellers2.webp" alt="bestsellers2" />
          <div className="flex flex-row object-cover w-96 bg-white drop-shadow-[3px_2px_2px_rgba(179,179,179,0.5)]">
            <img
              src="/bestsellers2.webp"
              alt="img1"
              className="border-[#ebebeb] border-[1px] px-4 w-1/5"
            />
            <img
              src="/bestsellers2.webp"
              alt="img1"
              className="border-[#ebebeb] border-[1px] px-4 w-1/5"
            />
            <img
              src="/bestsellers2.webp"
              alt="img1"
              className="border-[#ebebeb] border-[1px] px-4 w-1/5"
            />
            <img
              src="/bestsellers2.webp"
              alt="img1"
              className="border-[#ebebeb] border-[1px] px-4 w-1/5"
            />
            <img
              src="/bestsellers2.webp"
              alt="img1"
              className="border-[#ebebeb] border-[1px] px-4 w-1/5 "
            />
          </div>
        </div>
        <div className="pt-16 flex flex-col">
          <span className="font-black text-3xl w-96">
            BUCHANANS SPECIAL RESERVE 18 AÑOS
          </span>
          <span className="font-black pt-3">ESCOCIA | 0,75 Lts.</span>
          <div className="flex flex-row items-end gap-4 pt-6">
            <span className="text-2xl font-black text-bodebar-500">$99,99</span>
            <span className="font-bold text-primary-100 line-through">
              $199,99
            </span>
          </div>
          <div className="flex flex-row pt-20">
            <span className="border-slate-200 border-[1px] text-3xl px-4 ">
              -
            </span>
            <input
              type="number"
              step="1"
              value="1"
              className="p-1 w-14 text-center border-slate-200"
            />
            <span className="border-slate-200 border-[1px] text-2xl px-3">
              +
            </span>
          </div>
          <button
            type="button"
            className="flex flex-row justify-center bg-bodebar-500 w-40 text-white p-2 px-6 rounded-md mt-10 drop-shadow-[3px_2px_2px_rgba(179,179,179,0.5)] hover:bg-primary-100"
          >
            AGREGAR
          </button>
        </div>
      </div>
      <div className=" p-4 mt-16 flex flex-row justify-around items-center text-sm font-bold w-[900px]">
        <span className="border-bodebar-500 border-b-2 w-1/3 text-center">
          DESCRIPCION
        </span>
        <span className="text-primary-100 border-b-2 w-1/3 text-center">
          FICHA TECNICA
        </span>
        <span className="text-primary-100 border-b-2 w-1/3 text-center">
          COMENTARIOS
        </span>
      </div>
      <div className="w-[900px] p-4 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
        phasellus nullam facilisis quis commodo risus. Auctor vel ac, malesuada
        et sit. Diam eget porttitor sit vestibulum elementum amet, fringilla
        nibh. Et nunc, imperdiet natoque diam, etiam ligula tincidunt
        scelerisque quis. Ut faucibus proin morbi sagittis vitae tincidunt.
        Facilisis non lectus dictum nunc, auctor. At feugiat dui faucibus arcu.
        Praesent faucibus sit blandit felis in orci. Mauris ipsum mattis enim
        sed eu.
      </div>
      <ProductosSimilares />
    </section>
  );
}
