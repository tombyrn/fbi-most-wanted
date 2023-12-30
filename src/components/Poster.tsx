import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react"
import PosterCarousel from "./PosterCarousel"

export default function Poster({ data }: { data: any }) {
    return data ?  
    <Card placeholder="loading" className="w-96 h-48 m-2 p-5 flex-row justify-start items-stretch border border-blue-500">
        <CardHeader placeholder="loading" className="m-0 p-0 relative w-1/2 h-full border border-red-500">
            <PosterCarousel data={data.images}/>
        </CardHeader>

        <CardBody placeholder="loading" className="ml-2 p-0 w-fit h-full overflow-auto border border-green-500">
            <Typography placeholder="loading">TITLE: {data.title}</Typography>
            <Typography placeholder="loading">ALIASES: {data.aliases && data.aliases.map((alias: string) => <Typography placeholder="loading" key={alias}>{alias + ', '}</Typography>)} </Typography>
            <Typography placeholder="loading">DESCRIPTION: {data.description}</Typography>
            {/* <Typography placeholder="loading">CAUTION: {data.caution}</Typography> */}
            <Typography placeholder="loading">WARNING: {data.warning_message}</Typography>
            <Typography placeholder="loading">REWARD: {data.reward_text}</Typography>
        </CardBody>

    </Card> : <></>
}