import Link from "next/link";

export const metadata = {
    title:'Employees Details | Sundari Silks'
  }

export default function EmpDetails({params} : {
    params:{eno:string}
}) {
    return (
        <>
        <section className="flex mx-auto p-10"> 
            <h1 className="text-gray font-bold pr-10">Employee Id : {params.eno} </h1>
            <Link className="bg-blue-500 text-white p-2  rounded hover:bg-blue-800 hover:text-white" href="/employees">Go Back</Link>
        </section>
        </>
    )
}