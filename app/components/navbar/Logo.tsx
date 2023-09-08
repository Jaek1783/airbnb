'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
const Logo = () => {
    const router = useRouter(); 
    return (
        // <Image
        //     onClick={()=>router.push('/')}
        //     alt="Logo"
        //     className="hidden md:block cursor-pointer"
        //     height="100"
        //     width="100"
        //     src="/images/logo.png"
        // />
        <h1
        onClick={()=>router.push('/')}
        className="
            text-2xl
            font-bold
            text-rose-500
            cursor-pointer
            hidden
            md:block
        ">
            Air Go
        </h1>
    );
}
 
export default Logo;