import { modules, niveaux, pages } from "../fixtures/fixtures"


const getRandomInt=(max)=>{
    return Math.floor(Math.random*max)
}
const acces=()=>{
    const rand=getRandomInt(10)
     return (rand%2===0)
}
export const generateRandomAcces=()=>{
    const ressources=[]
    //
    niveaux.forEach(niveau=>{
        modules.forEach(module=>{
            const ressource={
                niveau:niveau.id,
                module:{...module, acces:acces()}
            }
            pages.forEach(page=>{
                const res={...ressource, page:{...page, acces:acces()}}
                ressources.push(res)
            })
           
        })
    })
    return ressources
}