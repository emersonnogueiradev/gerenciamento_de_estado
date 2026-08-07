import { createContext, useState } from "react";
import ItemCarrinho from "@/data/model/itemCarrinho";
import Produto from "@/data/model/Produto";


interface CarrinhoContextProps {

    itens: ItemCarrinho[];
    adicionarItem: (produto: Produto) => void; 
}


const CarrinhoContext = createContext<CarrinhoContextProps>({} as any)

export default CarrinhoContext


export function CarrinhoProvider(props: any){

    const [itens, setItens] = useState<ItemCarrinho[]>([]);
  
    function adicionarItem(produto: Produto){ 
        



        const itemExistente = itens.find(item => item.produto.id === produto.id);
        if(itemExistente){
            const novosItens = itens.map(item => {
                if(item.produto.id === produto.id){
                    return {...item, quantidade: item.quantidade + 1};
                }
                return item;
            });
            setItens(novosItens);
            return;
        }
        setItens([...itens, {produto, quantidade: 1}])
    }

    
    
    return(

        <CarrinhoContext.Provider value={{ itens, adicionarItem }}>
            {props.children}
        </CarrinhoContext.Provider>
    )
}
