import * as React from "react";
import Image from "next/image";

export default function ProjectCard() {
    const imageSrc = "/favicon.ico";
    const projectName = "My Project";
    const description = "This is my project description fjowhfguwbrgqwuirebquwejdvnqwoakdnvwoidnbvwoi";

    return (
        <main>
            <div className="pb-10">
                <h1 className="flex justify-center font-semibold text-3xl">Projects</h1>
            </div>
            <div className=" flex justify-center  rounded-lg shadow-lg">
                <div className="border border-zinc-300 flex  items-center rounded-lg">
                    <Image src={imageSrc} alt={projectName} width={100} height={100} className="rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">{projectName}</h3>
                        <p className="">{description}</p>
                    </div>
                </div>
            </div>
        </main>
        
    );
};