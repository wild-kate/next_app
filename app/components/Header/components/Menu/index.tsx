"use client"

import {FC} from "react";


const MenuLinkButton:FC<{name:string,active:boolean}> = ({name,active}) => {
    return <div style={{fontSize:14,fontWeight:600,cursor:"pointer",color:active ? "#E30611" : "#000",borderBottom:active ? "solid 3px #E30611" : undefined,padding:"28px 0 24px 0"}}>{name}</div>
}

export default MenuLinkButton