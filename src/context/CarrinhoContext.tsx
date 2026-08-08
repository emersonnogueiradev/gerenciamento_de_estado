import { createContext, useState } from "react";
import ItemCarrinho from "@/data/model/itemCarrinho";
import Produto from "@/data/model/Produto";



interface CarrinhoContextProps {

    itens: ItemCarrinho[];
    adicionarItem: (produto: Produto) => void; 

    removerItem: (produto: Produto) => void; 
    limpar: () => void; 

    valorTotal: number

    
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



    function removerItem(produto: Produto){

        const novosItems = itens.map(item => {
            return item.produto.id === produto.id ? {...item, quantidade: item.quantidade-1} : item

        }).filter(item=>item.quantidade >0 )



        setItens(novosItems)

    }


    function calcularValorTotal(){



        return itens.reduce((total:number, item: ItemCarrinho)=> {
            return total +(item.quantidade*item.produto.preco)
        },0)
    }


    function limpar(){
        setItens([])
    }


    
    
    return(

        <CarrinhoContext.Provider value={{ itens, adicionarItem, removerItem, limpar, get valorTotal() {return calcularValorTotal()} }}>
            {props.children}
        </CarrinhoContext.Provider>
    )
}
