/* eslint-disable prettier/prettier */
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

export default function BestSellers() {
  return (
    <section className="w-full h-full">
      <div className="p-32 flex items-center justify-center flex-col">
        <h2 className="text-3xl text-primary-100 font-bold">BEST SELLERS</h2>
        <div className="border-bodebar-500 border-b-[3px] w-16 p-2" />
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        <BsArrowLeftCircle
          className="fill-bodebar-400 cursor-pointer hover:fill-primary-100"
          size={36}
        />
        <img
          src="/bestsellers1.webp"
          alt="bestsellers1"
          className="w-0 lg:w-72"
        />
        <div className="bg-bodebar-400 lg:w-72 flex justify-center items-center rounded-md flex-col pb-4 drop-shadow-md cursor-pointer hover:bg-primary-100">
          <img src="/bestsellers2.webp" alt="bestsellers2" />
          <span className="text-white w-56 rounded-md py-2 px-4 bg-primary-400 font-bold">
            BUCHANAN'S DELUXE 12 ANOS
          </span>
        </div>
        <img
          src="/bestsellers3.webp"
          alt="bestsellers3"
          className="w-0 lg:w-72"
        />
        <BsArrowRightCircle
          className="fill-bodebar-400 cursor-pointer hover:fill-primary-100"
          size={36}
        />
      </div>
    </section>
  );
}
