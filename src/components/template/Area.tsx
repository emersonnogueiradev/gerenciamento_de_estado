interface AreaProps {
    titulo: string
    sumario?: string
    children: React.ReactNode
    cor: 'red' | 'blue' | 'green' | 'yellow' | 'purple'
}

export default function Area(props: AreaProps) {

    const cores = {
        red: 'bg-red-500',
        blue: 'bg-blue-500',
        green: 'bg-green-500',
        yellow: 'bg-yellow-500',
        purple: 'bg-purple-500',
    }

    return (
        <div className={`flex flex-col items-center ${cores[props.cor]} rounded-md w-full`}>

            <div
                className={`
                    flex items-center
                    ${props.sumario ? 'justify-between' : 'justify-center'}
                    w-full
                    bg-black/20
                    h-14
                    text-3xl
                    font-black
                    opacity-70
                `}
            >
                <span>{props.titulo}</span>

                {props.sumario && (
                    <span className="flex items-center px-4 bg-black/20 h-full">
                        {props.sumario}
                    </span>
                )}
            </div>

            <div className="p-7">
                {props.children}
            </div>

        </div>
    )
}
