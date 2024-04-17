
"use client"
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './navbar.module.css'

export default function Navbar() {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div style={{display:'flex',gap:'20px',justifyContent:'space-between'}}>
            <Image src='/logo.jpg' alt='' width={200} height={50} />
            <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                <Link href="/" className={`font-bold nav-item${pathname==='/' ? (' ' || styles.active) : ''} hover:text-blue-700`}>Home</Link><span className='font-bold'>|</span>
                <Link href="/employees"  className={`font-bold nav-item${pathname==='/employees'? (' ' || styles.active) : ''}  hover:text-blue-700`}>Employees</Link>
            </div>
        </div>
    )
}