'use client'
import {FC, useState} from "react";

const Element: FC = () => {
    const [visible, setVisible] = useState<boolean>(false)
    return <div>
        <div onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)}>button</div>
        {
            visible && "Кнопка наведена"
        }
    </div>
}

export default Element