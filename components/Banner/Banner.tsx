/* eslint-disable prettier/prettier */
import { Carousel } from 'flowbite-react';

export default function Banner({ left, right, indi }) {
  return (
    <div className="w-screen">
      <div className="h-[620px]">
        <Carousel
          leftControl={left}
          rightControl={right}
          indicators={indi}
          slide={false}
        >
          <img
            src="/banner.webp"
            alt="banner"
            className="h-full w-full object-center object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
}
