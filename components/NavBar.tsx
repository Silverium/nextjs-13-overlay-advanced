"use client";
import Link from "next/link"
import ModalAsHash from "@/components/ModalAsHash"
import { usePathname } from "next/navigation";

const NavBar: React.FC =  () => {
    const pathname = usePathname();

    return <section style={{ display: "flex", gap: "30px" }}>
        <Link href={"/"}>Home</Link>
        <Link href={"/list"}>List</Link>
        <Link href={"/list/login"}>List/Login</Link>
        <Link href={`${pathname === "/"? "": pathname}/login`}>*/login</Link>
        <Link href={`${pathname === "/"? "": pathname}/story`}>*/story</Link>
        <a href="#!login/modalParam">#!login/modalParam</a>
        <a href="#!story/modalParam">#!story/modalParam</a>
        <Link href={"/segmented"}>Segmented POC</Link>
        <Link href={"/cascade/1"}>Cascade POC (&quot;/cascade/1&quot;)</Link>
        <Link href={"/cascade/1/2"}>Cascade POC (&quot;/cascade/1/2&quot;)</Link>
        <ModalAsHash />
    </section>
}

export default NavBar;