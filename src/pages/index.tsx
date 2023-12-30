import Layout from "@/components/Layout";
import Poster from "@/components/Poster";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.fbi.gov/wanted/v1/list')
      const data = await response.json()
      setData(data.items)
    }
    fetchData().catch(console.error)
  })

  return (
    <Layout>
        {data && data.map((item: any, index: number) => <Poster key={index} data={item}></Poster>)}
    </Layout>
  )
}
