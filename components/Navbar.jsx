import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-gradient-to-t from-blue-600 to-green-200 px-8 py-3 h-[100px] rounded-xl">
            <Link href={"/"} className="text-white font-bold text-4xl">CRUD</Link>
            <Link href={"/addTopic"} className="bg-gradient-to-t from-slate-400 to-white p-2 rounded-xl">Add</Link>
        </nav>
    );
}