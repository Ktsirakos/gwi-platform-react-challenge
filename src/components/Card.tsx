import { useEffect, useState } from "react";
import Loading from "./Loading";
import { fetchCatById } from "@/lib/cat-api";
import LazyImage from "./LazyImage";

export default function Card({ title, referenceImage, url, onClick }: { title?: string, url?: string, referenceImage?: string, onClick: () => void }) {

    const [loading, setLoading] = useState(false)
    const [localUrl, setLocalUrl] = useState<string | undefined>(undefined)
    const [showNoImagePlaceholder, setShowNoImagePlaceholder] = useState(false)
    useEffect(() => {
        setLoading(true)

        if (url) {
            setLocalUrl(url)
            return;
        }

        if (!referenceImage) {
            setShowNoImagePlaceholder(true)
            setLoading(false)
            return;
        }

        fetchCatById({ catId: referenceImage }).then((value) => {
            console.log(value.url)
            setLocalUrl(value.url)
        })

    }, [])



    return (
        <button onClick={onClick} className="relative border-2 border-gray-700 rounded-3xl overflow-hidden h-90 items-center">
            <Loading condition={loading} />
            <div className="flex-2 content-center ">
                <p className="text-black text-xl group-hover:text-primary group-hover:font-bold">{title}</p>
            </div>
            <div className="flex-10 h-full content-center">
                {
                    localUrl && <LazyImage onFinishLoading={() => setLoading(false)} url={localUrl} />
                }
                {
                    showNoImagePlaceholder && <p className="font-bold text-2xl text-gray-400 p-5">No Reference Image</p>
                }
            </div>
        </button>
    )
}