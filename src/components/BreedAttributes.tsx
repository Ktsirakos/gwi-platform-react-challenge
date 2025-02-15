import { Breed } from "@/types/cat-api-types";


const AttributeSection = ({ title, data }: { title: string, data: { label: string, value: string | number }[] }) => {
    return (
        <>
            <p className="text-2xl font-semibold text-start text-black py-5">{title}</p>
            <div className="grid grid-cols-2 gap-2">
                {
                    data.map((e) => <>
                        <p className="text-start text-black">{e.label}</p>
                        <p className="text-end text-black">{e.value}</p>
                    </>
                    )
                }
            </div>
        </>
    )
}

export default function BreedAttributes({ breed }: { breed?: Breed }) {

    if (!breed) return (
        <div className="m-10">
            <p className="text-3xl font-bold text-black">No breed information available!</p>
        </div>
    )

    const coreDetails = [
        { label: "Name", value: breed.name },
        { label: "Alternative names", value: breed.alt_names },
        { label: "Origin", value: breed.origin },
        { label: "Description", value: breed.description }
    ]

    const characteristics = [
        { label: "Adaptability", value: breed.adaptability },
        { label: "Affection Level", value: breed.affection_level },
        { label: "Child Friendly", value: breed.child_friendly },
        { label: "Dog Friendly", value: breed.dog_friendly },
        { label: "Energy Level", value: breed.energy_level },
        { label: "Grooming", value: breed.grooming },
        { label: "Health Issues", value: breed.health_issues },
        { label: "Intelligence", value: breed.intelligence },
        { label: "Shedding Level", value: breed.shedding_level },
        { label: "Social Needs", value: breed.social_needs },
        { label: "Stranger Friendly", value: breed.stranger_friendly },
        { label: "Vocalisation", value: breed.vocalisation }
    ];

    const traits = [
        { label: "Experimental", value: breed.experimental },
        { label: "Hairless", value: breed.hairless },
        { label: "Natural", value: breed.natural },
        { label: "Rare", value: breed.rare },
        { label: "Rex", value: breed.rex },
        { label: "Suppressed Tail", value: breed.suppressed_tail },
        { label: "Short Legs", value: breed.short_legs },
        { label: "Hypoallergenic", value: breed.hypoallergenic }
    ];

    return (
        <div className="p-5">
            <AttributeSection title={"General"} data={coreDetails} />
            <AttributeSection title={"Characteristics"} data={characteristics} />
            <AttributeSection title={"Traits"} data={traits} />
        </div>
    )
}