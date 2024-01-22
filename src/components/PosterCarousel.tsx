import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import Portrait from "./Portrait";

export default function PosterCarousel({ data }: { data: any }) {
  const [imgSrc, setImgSrc] = useState("/next.svg");
  return (

      <Carousel className="m-0 p-0 rounded-xl w-full h-full" placeholder="Loading..." transition={{duration: 0}} loop>
        {data.map((item: any, index: number) => <Portrait key={index} item={item}/>)}
      </Carousel>

  );
}
