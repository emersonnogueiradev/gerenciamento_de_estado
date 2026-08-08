import Real from "@/utils/Real";
import Area from "../template/Area";
import CarrinhoVazio from "./CarrinhoVazio";
import CarrinhoContext from "@/context/CarrinhoContext";
import { useContext } from "react";
import ItemCarrinhoCard from "./ItemCarrinhoCard";


export default function Carrinho() {

    const {itens, valorTotal, limpar} = useContext(CarrinhoContext);
    return (
        <Area titulo="Carrinho de Compras" cor="green" sumario={Real.format(valorTotal)} >
            <div className="flex flex-wrap justify-center gap-4">
                {itens.length === 0 ? <CarrinhoVazio/> : 
                
                itens.map(
                    (item) => {
                        return(
                            <ItemCarrinhoCard key={item.produto.id} item={item} />
                        )
                    }   
                )                     
            }

            <button className="btn"  onClick={() => limpar()}>LIMPAR</button>
            </div>
        </Area>

    )


}