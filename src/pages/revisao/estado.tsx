import Area from "@/components/template/Area"
import { useState } from "react"

export default function RevisaoEstado(){


    const [texto,SetTexto] = useState("")

    return (

        <div className="p-20">

            <Area titulo="Revisao de Estado" cor="green">
                <input type="text" className="input" value={texto} onChange={(e)=>{ SetTexto(e.target.value )}} />


            </Area>

        </div>
    )
}