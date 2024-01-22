import Layout from "@/components/Layout";
import Poster from "@/components/Poster";
import { ListContext } from "@/contexts/ListContext";
import { Button, List, ListItem, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";


export default function Home() {
  const baseurl = 'https://api.fbi.gov/wanted/list?poster_classification='
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const { url, setUrl } = useContext(ListContext);
  
  useEffect(() => {
    const fetchData = async () => {
      setData(null)
      console.log('fetching...', url)
      const response = await fetch(url)
      console.log('fetched', response)
      const data = await response.json()
      console.log('data', data.items)
      setData(data.items)
    }
    fetchData().catch(console.error)
  }, [url])
  

  
  return (
    <Layout>
      <div className="h-1/3 w-1/6 flex flex-col">
        <Menu allowHover>
          <MenuHandler>
            <Button placeholder="Loading...">Classification</Button>
          </MenuHandler>
          <MenuList placeholder="Loading...">
            <MenuItem placeholder="Loading..." onClick={() => setUrl(baseurl + 'ten')}>Top Ten</MenuItem>
            <MenuItem placeholder="Loading..." onClick={() => setUrl(baseurl + 'terrorist')}>Terrorist</MenuItem>
            <MenuItem placeholder="Loading..." onClick={() => setUrl(baseurl + 'information')}>Seeking Information</MenuItem>
            <MenuItem placeholder="Loading..." onClick={() => setUrl(baseurl + 'kidnapping')}>Kidnapping</MenuItem>
            <MenuItem placeholder="Loading..." onClick={() => setUrl(baseurl + 'missing')}>Missing Persons</MenuItem>
            <MenuItem placeholder="Loading..." onClick={() => setUrl(baseurl + 'crimes-against-children')}>Crimes Against Children</MenuItem>
            <MenuItem placeholder="Loading..." onClick={() => setUrl(baseurl + 'ecap')}>Endangered Child Alert Program</MenuItem>
            <MenuItem placeholder="Loading..." onClick={() => setUrl(baseurl + 'law-enforcement-assistance')}>Law Enforcement Assistance</MenuItem>
          </MenuList>
        </Menu>
      </div>
        {data && data.map((item: any, index: number) => <Poster key={index} data={item}></Poster>)}
    </Layout>
  )
}
