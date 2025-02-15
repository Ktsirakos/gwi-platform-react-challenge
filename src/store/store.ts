import { Cat } from "@/types/cat-api-types"
import { create } from "zustand"
import { persist } from 'zustand/middleware'


interface StoreState {
    favourite: Cat[],
    addToFavourite: (cat: Cat) => void
    removeFromFavourite: (catId: string) => void
    isFavourite: (catId?: string) => boolean
    resetFavourites: () => void
}

const useStore = create<StoreState>()(
    persist((set, get) => ({
        favourite: [],
        addToFavourite: (cat: Cat) => {
            const updated = [...get().favourite, cat]
            set({
                favourite: updated
            })
        },
        removeFromFavourite: (catId: string) => {
            const updated = get().favourite.filter((e) => e.id !== catId)
            set({
                favourite: updated
            })
        },
        isFavourite: (catId?: string) => {
            return get().favourite.find(e => e.id === catId) ? true : false
        },
        resetFavourites: () => {
            set({
                favourite: []
            })
        }
    }), {
        name: 'gwi-cat-application',
    }))

export default useStore