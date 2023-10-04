"use client"

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleNav = () => {
        setNav(!nav)
        setVisible(!visible)
    }
    return (
        <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
            <div className="max-w-[1240px m-auto flex justify-between items-center p-4">
                <Link className="font-bold text-4xl" href="/">Pete</Link>
                <ul className="hidden sm:flex">
                    <li className="p-4">
                        <Link href="/">Contacts</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/">Categories</Link>
                    </li>
                </ul>
                <div onClick={handleNav} className="block sm:hidden z-10">
                    {
                        nav? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />
                    }
                        
                </div>
                {/*  */}
                <div className={`${visible? "hidden": ""} sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300`}>
                <ul>
                    <li className="p-4 text-4xl hover:text-gray-500">
                        <Link href="/">Contacts</Link>
                    </li>
                    <li className="p-4 text-4xl hover:text-gray-500">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="p-4 text-4xl hover:text-gray-500">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="p-4 text-4xl hover:text-gray-500">
                        <Link href="/">Categories</Link>
                    </li>
                </ul>                
                </div>
            </div>
        </div>
    );
};

export default Navbar;

