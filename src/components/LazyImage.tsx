import { useState } from "react"

export default function LazyImage({ url, onFinishLoading }: { url: string, onFinishLoading: () => void }) {

    const [loading, setLoading] = useState(false)
    return (
        <img
            className={`
            transition-all 
            duration-300 
            ease-in-out 
            hover:scale-125 
            object-cover 
            w-full 
            h-full 
            ${loading ? 'opacity-0' : 'opacity-100'}`}
            src={url}
            onLoad={() => {
                setLoading(false)
                onFinishLoading()
            }}
        />
    )
}