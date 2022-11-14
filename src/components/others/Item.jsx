import styled from "styled-components"
import ArrowRight from "@mui/icons-material/ArrowRight"
import { toggleButtonGroupClasses } from "@mui/material"


const Item=({text, background, action})=>{
    const invertColor=(background==='E1F5FE')?'E8EAF6':'E1F5FE'
    const Squared=styled.div`
        border:1px solid #000;
        border-width:30px;
        border-color: red blue gold green ;
        width: 0px;
        height: 0px;
        border-color: transparent transparent transparent #${invertColor};
    `
    const LI=styled.li`
        lineHeiht: 30px;
        background :#${background};
        margin-top:1px;
        display:flex;
        align-items:center;
        span{
            margin-left:-20px
        };
        cursor:pointer;
        :hover{
            filter: brightness(0.9);
        }
    `
    return (
        <LI background={background} onClick={()=>action(text)}>
            <Squared />
            <span>{text}</span>
        </LI>
    )
}

export default Item