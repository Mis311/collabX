import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <div className="py-10 flex justify-between">
            <p className=" border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-semibold">
                CollabX
            </p>
            <p className="pt-4 px-8 bg-white text-black rounded-full">
                <Link href="">Login</Link>
            </p>
        </div>
    );
}
