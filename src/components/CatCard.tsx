import { Cat } from "@/types/cat-api-types";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function CatCard({ cat }: { cat: Cat }) {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
    }, [])

    return (
        <div className="relative border-2 border-gray-700 rounded-3xl overflow-hidden h-90 items-center">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-12 h-12 animate-spin text-purple-500" />
                </div>
            )}
            <img onLoad={() => setLoading(false)} className={`transition-all duration-300 ease-in-out hover:scale-125 object-cover w-full h-full ${loading ? 'opacity-0' : 'opacity-100'}`} src={cat.url} />
        </div>
    )
}