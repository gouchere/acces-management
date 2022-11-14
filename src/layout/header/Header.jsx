import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/material"
import Typography from '@mui/material/Typography';
import { Component, useCallback, useEffect, useState} from "react"
import styled from "styled-components"
import EffectStyle from "../../components/others/EffectStyle"

/**
 * Header is component to build main header of the application
 * @return {Component}
 */
const HeaderPage=styled.div`
    display: flex;
    justify-content: space-between;
    background: #0069C0;
    width:100%;
    height:100%;
`
const SecIcon=styled.div`
    display: flex;
    h6{
        font-size:0.8em;
        display: flex;
        align-items: center;
        color: #FFF
    }
`
const Header=({title, toogle,  open, currentNiveau})=>{
    return(
        <>
        <HeaderPage>
            {console.log('build')}
            <SecIcon>
                <IconButton onClick={()=>toogle()}>
                    {!open?<MenuIcon />:<ArrowBackIcon />}
                </IconButton>
                <Typography variant="h6" component='h6' >{title.toUpperCase()}</Typography>
            </SecIcon>
            <EffectStyle maxX={50} maxY={50} />
        </HeaderPage>
        {currentNiveau && 
                        <div className="title-page">
                            {currentNiveau}
                        </div>
        }
        
        </>
    )
}

export default Header