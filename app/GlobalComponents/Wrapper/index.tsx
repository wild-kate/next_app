import {FC, PropsWithChildren} from "react"

import style from "./wrapper.module.scss"

const Wrapper:FC<PropsWithChildren> = ({children}) =>{
    return <div className={style.wrapper}>{children}</div>
}

export default Wrapper