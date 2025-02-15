import { X } from "lucide-react";
import { ReactNode } from "react";

export default function Modal({
    children,
    title,
    onClose,
    isOpen
}: {
    children: ReactNode,
    title: string,
    onClose: () => void,
    isOpen: boolean
}
) {

    if (!isOpen) return null;

    return (
        <div className="fixed z-10 inset-0 w-full h-full overflow-scroll">
            <div className="absolute p-5 border-1 w-full h-full bg-gray-700 opacity-50">
            </div>
            <div className="absolute inset-0 z-12 flex flex-col justify-self-center self-center w-2/4 h-9/10 bg-white rounded-2xl overflow-scroll">
                <div className="flex-1 flex flex-row items-center justify-between p-5">
                    <p className="text-3xl text-black">{title}</p>
                    <button className="text-gray-500 text-5xl hover:text-primary" onClick={onClose}><X /></button>
                </div>
                <div className="flex-11 mb-10">
                    {children}
                </div>
            </div>
        </div>
    )
}