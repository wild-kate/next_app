import { FC } from "react";

const TitleCounter:FC<{title:string,count:number}> =({title,count})=>{
    return <div style={{display:"flex",gap:6}}>
        <div style={{fontSize:"28px",fontWeight:700,color:"#001424"}}>{title}</div>
        <div style={{fontSize:"16px",fontWeight:700,color:"#C9C9C9"}}>{count}</div>
    </div>
}

export default TitleCounter