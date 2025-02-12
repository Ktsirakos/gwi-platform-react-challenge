import { ChevronDown } from "lucide-react";
import Loading from "./Loading";

export default function AsyncButton({ loading, onClick }: { loading: boolean, onClick: () => void }) {
    return (
        <button onClick={onClick} className="relative flex flex-row gap-1 text-black h-15 hover:text-purple-500">
            <Loading condition={loading} />
            {!loading ? <><ChevronDown /> Load more</> : null}
        </button>
    )
}