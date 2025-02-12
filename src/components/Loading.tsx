import { Loader2 } from "lucide-react"

export default function Loading({ condition }: { condition: boolean }) {
    if (!condition) return null

    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-12 h-12 animate-spin text-purple-500" />
        </div>
    )
}