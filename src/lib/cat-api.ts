import { fetchClient } from "@/lib/api-client"
import { Breed, Cat } from "@/types/cat-api-types"

export const fetchRandomCats = async ({
    limit = 10,
    filteredBreeds = []
}: { limit?: number, filteredBreeds?: string[] }) => {
    const filterByBreedQueryParams = filteredBreeds.length ? `&breed_ids=${filteredBreeds.join(",")}` : ''

    const response = await fetchClient(
        `/images/search/?limit=${limit}${filterByBreedQueryParams}`
    ) as Cat[]

    return response
}

export const fetchCatById = async ({ catId }: { catId: string }) => {

    const response = await fetchClient(
        `/images/${catId}`
    ) as Cat

    return response
}

export const fetchBreeds = async () => {
    const response = await fetchClient("/breeds") as Breed[]
    return response
}

export const fetchBreedById = async ({
    breedId
}: { breedId: string }) => {
    const response = await fetchClient(`/breeds/${breedId}`) as Breed
    return response
}