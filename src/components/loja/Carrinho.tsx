import Real from "@/utils/Real";
import Area from "../template/Area";
import CarrinhoVazio from "./CarrinhoVazio";
import CarrinhoContext from "@/context/CarrinhoContext";
import { useContext } from "react";
import ItemCarrinhoCard from "./ItemCarrinhoCard";


export default function Carrinho() {

    const {itens} = useContext(CarrinhoContext);
    return (
        <Area titulo="Carrinho de Compras" cor="green" >

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

            </div>
        </Area>

    )


}