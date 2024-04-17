"use client";

export default function ErrorBoundry({
    error,
    reset
} : {
    error:Error,
    reset:()=>void
}) {
    return (
        <>

    <h1>{error.message}</h1>
    <br />
    <button onClick={()=>reset()}>Try Again</button>
    </>
    )
}