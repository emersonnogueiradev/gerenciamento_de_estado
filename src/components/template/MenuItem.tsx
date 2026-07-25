import Link from "next/link";
import React from "react";

interface MenuItemProps {
    icone: any
    texto: string
    url: string
}




export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url} className="flex flex-col items-center gap-2">
            <div className="bg-linear-to-r from-blue-500 to-green-500 rounded-full p-5">
                <span>{React.cloneElement(props.icone, { size: 80, stroke: 1, className: "opacity-40" })}

                </span>
            </div>
            <span className="opacity-30  text-white font-black text-3xl">{props.texto}</span>
        </Link>
    )
}