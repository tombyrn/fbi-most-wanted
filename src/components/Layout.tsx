export default function Layout({ children }: { children: React.ReactNode }) {
    return <main className="m-0 p-0 flex flex-row flex-wrap justify-around items-center">
        {children}
    </main>
}