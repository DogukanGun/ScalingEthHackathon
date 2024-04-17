"use client"
import { ConnectKitButton } from "connectkit";
import Link from "next/link";

const CustomNavbar = () => {
    return (
        <div className="navbar bg-accent text-primary-content">
            <div className="flex-1">
                <a className="btn btn-ghost text-header2">Protocol Safety</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className="mx-5"><Link href="/">Home</Link></li>
                    <li><ConnectKitButton showBalance/></li>
                </ul>
            </div>
        </div>
    )
}

export default CustomNavbar;