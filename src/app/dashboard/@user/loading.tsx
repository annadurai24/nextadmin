
export default async function Loading() {
    await new Promise((resolve)=> {
        setTimeout(()=> {
            resolve('ok')
        },10000)
    })
    return <h1>Loading...</h1>
}