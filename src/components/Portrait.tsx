import { useState } from "react";
import Image from "next/image";
export default function Portrait({ item }: { item: any}) {
    const [imgSrc, setImgSrc] = useState(item.original || "/next.svg");

    return (
        <div className="w-full h-full m-0 p-0 flex justify-center items-center relative">

            <Image
                src={imgSrc}
                alt={item.caption || "No caption provided"}
                fill={true}
                sizes="100vw"
                // width={500}
                // height={500}
                className="object-contain"
                onError={() => setImgSrc("/next.svg")}
                />
                {/* <img src={imgSrc} alt={item.caption || "No caption provided"}/> */}
        </div>
    )
}