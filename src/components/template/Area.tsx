interface AreaProps {
    titulo: string
    children: any
}


export default function Area(props: AreaProps){

    return(
        <div className=" flex flex-col items-center bg-red-500 rounded-md w-full">

            <div>
                {props.titulo}
            </div>


            <div>
                {props.children}
            </div>

        </div>
    )
}