import { useState } from "react"
import Area from "../Area"
import GerarNumero from "./GerarNumero"

export default function Mostrador(){

    const [n1,SetN1] = useState(0)

    const[n2,SetN2] = useState(0)

    const [resultado,setResultado] = useState(0)

    function exibirResultado(numero:number){
        setResultado(numero)
    }

    
    return(
        <Area titulo="Mostrador" cor="red">

            <div className="flex justify-center font-black text-6xl">
                {resultado}
            </div>

            <div className="flex gap-5 p-5">
                <input type="number"  value={n1} onChange={(e) => SetN1(+e.target.value) }  className="input" />
                <input type="number"  value={n2} onChange={(e) => SetN2(+e.target.value) }className="input" />    
            
            </div>        

            <GerarNumero numero1={n1} numero2={n2} gerarNumero={exibirResultado} ></GerarNumero> 
        
        </Area>
    )
}


