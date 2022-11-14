import { useState } from "react"

const useDrawer=()=>{
    const [open, setOpen]=useState(false)
    const toogle=()=>{
        console.log(open)
        setOpen(!open)
        return open;
    }
    
    return {open, toogle}
}

export default useDrawer