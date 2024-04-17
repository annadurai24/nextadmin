import Link from "next/link";

export default function F1() {
    return (
        <>
            <h1>F1 Page</h1>
            <Link href="/f1/f2">Click F2 Page</Link>
            <Link href="/about">About</Link>
        </>
    )
}