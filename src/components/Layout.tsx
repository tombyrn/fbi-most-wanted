export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative m-0 p-5 w-screen h-screen flex flex-col border-2 border-black overflow-auto">
            {children}
        </div>
        )
}