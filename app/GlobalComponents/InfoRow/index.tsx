import {FC, PropsWithChildren} from "react";

import style from "./infoRow.module.scss"

const InfoRow:FC<PropsWithChildren&{title:string,small?:boolean}> = ({children,title,small})=>{
    const size = small ? 14 : 16

    return <div className={style.infoRow}>
        <div className={style.title} style={{fontSize:size}}>{title}:</div>
        <div className={style.children} style={{fontSize:size}}>{children}</div>
    </div>
}

export default InfoRow