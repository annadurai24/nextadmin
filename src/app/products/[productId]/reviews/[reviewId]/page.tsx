"use client"
type propParams = {
    params : {
        productId:string,
        reviewId:string        
    }
}
function getRandomInit(count:number) {
    return Math.floor(Math.random() * count);
}
export default function ReviewDetails({
params
}: propParams) {
    const random = getRandomInit(2);
    console.log(random)
    if(random===1) {
        throw new Error('Error Loading Review')
    }

    const {productId:product,reviewId:review} = params;
    return (
        <div>
            <h1>Product Details of {product} and Review of {review}</h1>
        </div>
    )
}