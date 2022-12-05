/* eslint-disable prettier/prettier */
export default function Loremipsum() {
  return (
    <section className="h-96 lg:h-[480px] bg-[url('/banner_lorem.webp')] flex justify-center items-center lg:pl-96 ">
      <div className="w-80 lg:w-[480px] text-center">
        <h2 className="text-2xl lg:text-3xl text-white p-8 flex items-center justify-center">
          Lorem ipsum dolor sit amet
        </h2>
        <span className="text-white text-center flex items-center justify-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
          phasellus nullam facilisis quis commodo risus. Auctor vel ac,
          malesuada et sit.
        </span>
      </div>
    </section>
  );
}
