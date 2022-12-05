/* eslint-disable prettier/prettier */

export default function Sidebar() {
  return (
    <section className="w-80 h-auto bg-primary-400 flex flex-col pl-14 text-white">
      <span className="text-left font-bold pt-24">CATEGORIA</span>
      <ul className="pt-10">
        <li className="hover:text-bodebar-300 cursor-pointer">Whisky</li>
        <li className="hover:text-bodebar-300 cursor-pointer">Ron</li>
        <li className="hover:text-bodebar-300 cursor-pointer">Vinos</li>
        <li className="hover:text-bodebar-300 cursor-pointer">Destilados</li>
        <li className="hover:text-bodebar-300 cursor-pointer">Licores</li>
        <li className="hover:text-bodebar-300 cursor-pointer">Otros</li>
      </ul>
      <div className="border-b-[1px] w-40 py-4 border-primary-300" />
      <span className="text-left font-bold py-8">PRECIO</span>
      <div className="flex flex-row">
        <span className="text-left font-bold">
          ${' '}
          <input
            type="text"
            className="ml-2 w-10 border-0 text-center focus:outline-none focus-within:ring-0 bg-primary-400 border-b-2 border-primary-200 p-0"
          />{' '}
          -{' '}
          <input
            type="text"
            className="ml-2 w-10 border-0 text-center focus:outline-none focus-within:ring-0 bg-primary-400 border-b-2 border-primary-200 p-0"
          />
        </span>
      </div>
      <div className="border-b-[1px] w-40 py-6 border-primary-300" />
      <span className="text-left font-bold py-8">OFERTAS</span>
    </section>
  );
}
