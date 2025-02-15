import { ChevronDown } from "lucide-react";
import Loading from "@/components/Loading";

export default function AsyncButton({ loading, onClick }: { loading: boolean, onClick: () => void }) {
    return (
        <button onClick={onClick} className="relative flex flex-row gap-1 text-black h-15 hover:text-primary">
            <Loading condition={loading} />
            {!loading ? <><ChevronDown /> Load more</> : null}
        </button>
    )
}