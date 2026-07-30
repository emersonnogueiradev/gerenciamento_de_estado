import Area from "@/components/template/Area";


export default function Temp(){

    return(
        <div className="p-20">
            <Area titulo="Teste do componente" cor="red" >
                <div>1</div>
                <div>2</div>
                <div>3</div>
            
            </Area>


            <Area titulo="Teste do componente" cor="green" sumario="R$ 1200,00">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            
            </Area>
        </div>
    )
}