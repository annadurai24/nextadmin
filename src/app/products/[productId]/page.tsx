import { notFound } from "next/navigation"


type paramProps = {
    params : {
        productId:string
    }
}
export default function ProductDetails({
    params 
} : paramProps) {
    if (parseInt(params.productId) > 20)  {
        return notFound();
    }
    return <h1>Product Details of {params.productId}</h1>
}