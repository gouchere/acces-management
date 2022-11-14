import ItemsRessources from "../components/ItemsRessources"
import { generateRandomAcces } from "../utils/utils"
const Home=()=>{
    const subAcces=generateRandomAcces()
    const parts=subAcces.splice(0, 10)
    return (
        <div className="items-ressource">
            {subAcces.map((item,idx)=> {
                const padding=idx%2===0
                return <ItemsRessources key={idx} item1={item} padding={padding}/>
            })}
        </div>
    )
}

export default Home