import { useMemo, useState } from "react"
import SideBar from "../../components/SideBar"
import useDrawer from "../../utils/hooks/viewHook/useDrawer"
import Header from "./Header"

const HeaderApp=({title})=>{
    const {open, toogle}=useDrawer()
    const [titleNiveau, setTitleNiveaux]=useState()

    /* Function to change title for loading data */
    const getTextSubTitle=(text)=>{
        setTitleNiveaux(text)
        toogle()
    }

    /* Fonction who load All resources for one niveau */
    const sideComponent=useMemo(()=><SideBar open={open} onclick={getTextSubTitle} />, [open])

    return (
        <>
        {sideComponent}
        <Header title={title} toogle={toogle} open={open} currentNiveau= {titleNiveau}/>
        </>
    )
}

export default HeaderApp