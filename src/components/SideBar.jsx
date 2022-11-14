import { Box, Divider, Drawer, List, ListItem, Typography } from "@mui/material"
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react"
import styled from "styled-components";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Close } from "@mui/icons-material";

import { niveaux } from "../fixtures/fixtures";
import Item from "./others/Item";

const HeaderDiv=styled.div`
    background:#0069C0;
    display:flex;
    items-align:center
`
const DrawerHeader=styled.div`
    background:#81d4fa;
    items-align:center;
    display:flex;
`
const UL=styled.ul`
    margin:0px;
    padding:0px;
        li{
            list-style-type:none
        }
`

const SideBar=({open, onclick})=>{
    return(
        <div style={{position:"relative"}}  >
            {console.log("rerender ...")}
          <Drawer open={open} 
                className="drawer-class"
                variant="persistent"
                anchor="left"
                sx={{
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                      boxSizing: 'border-box',
                    },
                  }}>
                      <div>
                        <UL>
                            {niveaux.map(n=> 
                            <Item key={n.id} text={n.title} background={(n.id%2===0)?'E1F5FE':'E8EAF6'} action={onclick} />)}
                        </UL>
                      </div>
          </Drawer>
        </div>
    )
}

export default SideBar