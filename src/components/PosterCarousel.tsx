import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export default function PosterCarousel({ data }: { data: any }) {
  return (

      <Carousel className="rounded-xl w-fit h-fit" placeholder="Loading..." loop={true}>
        {data.map((item: any, index: number) => (
          <Image
            key={index}
            src={item.original}
            alt={item.caption}
            width={1000}
            height={1000}
          />
        ))}
      </Carousel>

  );
}
