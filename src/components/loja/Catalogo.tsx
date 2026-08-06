import Area from "../template/Area";
import ProdutoCard from "./ProdutoCard";
import CatalogoContext from "@/context/CatalogoContext";
import { useContext } from "react";
export default function Catalogo() {

    const {produtos}  = useContext(CatalogoContext);

    function renderizarProdutos() {
        return  produtos.map((prod: any) => {
            return <ProdutoCard key={prod.id} produto={prod} /> 
        })
    }

    return (
        <Area  titulo="Catálogo de Produtos" cor="purple" >
            <div className="flex justify-around flex-wrap gap-4">
                {renderizarProdutos()}

            </div>
        </Area>

    )


}
