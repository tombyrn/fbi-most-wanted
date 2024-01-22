import React, { createContext, useState, Dispatch, SetStateAction } from "react";


export const ListContext = createContext<{ url: string; setUrl: Dispatch<SetStateAction<string>> }|undefined>(undefined);

export default function ListProvider({ children }: { children: React.ReactNode }) {
    const [url, setUrl] = useState('https://api.fbi.gov/wanted/list?poster_classification=ten');

    return (
        <ListContext.Provider value={{ url, setUrl }}>
            {children}
        </ListContext.Provider>
    );
}