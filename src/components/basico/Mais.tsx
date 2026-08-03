
import ContadorContext from "@/context/ContadorContext";
import Area from "../template/Area";
import { useContext } from "react";

export default function Mais(){
    const {incrementar } = useContext(ContadorContext)
    return(
        <Area titulo="Botão Mais" cor="blue">
            <button className="btn" onClick={incrementar}>

                +1                

            </button>
        </Area>
    )
}


