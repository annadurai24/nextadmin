export default function Reviews({
    params
}: {
    params : {
        productId:string
    }
}) {
    return(
        <div>
            <h1>Product Details {params.productId}</h1>
            <h1>Reviews List</h1>
        </div>
    )
}