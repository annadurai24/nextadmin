export default function Docs({
    params
}: {
    params : {
        slugs:string[]
    }
}) {
    if (params.slugs?.length === 2) {
        return <h1>Document's feature is {params.slugs[0]} and concepts is {params.slugs[1]}</h1>
    } else if (params.slugs?.length === 1) {
        return <h1>Docuemnt's feature is {params.slugs[0]}</h1>
    }
    return <h1>Documenet Home Page</h1>
}