import { Button, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react"
import PosterCarousel from "@/components/PosterCarousel"
import { useRouter } from "next/router";
import Link from "next/link";

function stripHtml(htmlString: string) {
    if(!htmlString) return undefined;
    var doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || "";
}

export default function Poster({ data }: { data: any }) {
    const router = useRouter();
    
    return data ?  
    <div className="w-full h-1/3 flex justify-center m-2 ">

        <Card placeholder="loading" className="w-1/2 h-full p-5 flex-row justify-start items-stretch border-2 border-blue-500">
            <CardHeader placeholder="loading" className="m-0 p-5 w-1/3 h-full ">
                <PosterCarousel data={data.images}/>
            </CardHeader>

            <div className="ml-2 p-2 flex flex-col w-full h-full">
                <CardBody placeholder="loading" className="w-full h-full overflow-auto rounded-xl border border-blue-500">
                    <Typography variant="h5" placeholder="loading" className="text-center pb-4">{data.title || "N/A"}</Typography>
                    <Typography variant="small" placeholder="loading" className=" pb-2">{stripHtml(data.details) || stripHtml(data.description) || data.hair_raw || "N/A"}</Typography>
                    <Typography variant="h6" placeholder="loading" className=" pb-2">{stripHtml(data.caution) || data.scars_and_marks || data.weight || "N/A"}</Typography>
                    <Typography variant="small" placeholder="loading" className=" pb-4">{data.reward_text || data.additional_information || data.warning_message ||  data.height_max || data.sex || "N/A"}</Typography>
                    <Link href={data.url} rel="noopener noreferrer" target="_blank" className="flex justify-center"> Visit Page </Link>
                </CardBody>

                {/* <Button className="mt-2 h-1/12" placeholder="loading" onClick={() => {router.push(data.url)}}>visit page</Button> */}
            </div>
        </Card>
    </div> : <></>
}