import Capitulo from "@/data/model/Capitulo";
import { createContext, useState } from "react";
import capitulosImportados from "@/data/constants/capitulos";


// 1. A interface define O QUE o contexto disponibiliza para a aplicação
interface CursoContextProps {
  capitulos: Capitulo[];
}






// 2. Criação do contexto com a interface
const CursoContext = createContext<CursoContextProps>({} as any);

//Capitulo dentro de um estado 

export function CursoContextProvider(props: any) {
    const [capitulos, setCapitulos] = useState<Capitulo[]>(capitulosImportados);


    

    




    // 3. O 'return' é OBRIGATÓRIO no componente
    return (
        <CursoContext.Provider value={{ capitulos }}>
        {props.children}
        </CursoContext.Provider>
    );
}

export default CursoContext;