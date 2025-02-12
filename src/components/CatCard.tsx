import { Cat } from "@/types/cat-api-types";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function CatCard({ cat, onClick }: { cat: Cat, onClick: () => void }) {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
    }, [])

    return (
        <button onClick={onClick} className="relative border-2 border-gray-700 rounded-3xl overflow-hidden h-90 items-center">
            <Loading condition={loading} />
            <img onLoad={() => setLoading(false)} className={`transition-all duration-300 ease-in-out hover:scale-125 object-cover w-full h-full ${loading ? 'opacity-0' : 'opacity-100'}`} src={cat.url} />
        </button>
    )
}