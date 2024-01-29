import {Children, FC, PropsWithChildren} from "react";

const TenderProps:FC = ()=>{
    return <TenderPropsWrapper>
        Открытый аукцион в электронной форме №0373200025620000384
        <TenderType/>
        <InnLock/>
        <Archive/>
    </TenderPropsWrapper>
}

export default TenderProps

const TenderType: FC = () => {
    return <div>223 ФЗ</div>
}

const InnLock:FC =()=>{
    return <div style={{display:"flex",alignItems:"center",gap:4}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path d="M9.63519 13.909L10.1382 11.393L13.6595 6.86457L9.63578 2.84018L5.10779 6.36163L2.59115 6.86469L1.58506 7.87153L4.60404 10.8899L1.33301 14.6636L1.58506 14.9151L1.83658 15.1667L5.61013 11.896L8.62839 14.9151L9.63519 13.909Z" fill="black"/>
        </svg>
        Закреплена по ИНН
    </div>
}

const Archive:FC =()=>{
    return <div style={{display:"flex",alignItems:"center",gap:4}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
            <path d="M1.75 8.08332H12.25V12.7512C12.25 13.0726 11.9904 13.3333 11.6708 13.3333H2.32925C2.25298 13.3332 2.17749 13.318 2.10709 13.2886C2.03669 13.2593 1.97277 13.2164 1.91897 13.1623C1.86517 13.1082 1.82256 13.0441 1.79357 12.9735C1.76458 12.903 1.74977 12.8274 1.75 12.7512V8.08332ZM1.75 2.24882C1.75 1.92741 2.00959 1.66666 2.32925 1.66666H11.6708C11.9904 1.66666 12.25 1.92682 12.25 2.24882V6.91666H1.75V2.24882ZM5.25 3.41666V4.58332H8.75V3.41666H5.25ZM5.25 9.83332V11H8.75V9.83332H5.25Z" fill="#333333"/>
        </svg>
        Архивная
    </div>
}

const TenderPropsWrapper:FC<PropsWithChildren> =({children})=>{
    const arrayChildren = Children.toArray(children)
    return <div style={{display:"flex",fontSize:"12px",fontWeight:400}}>
        {
            arrayChildren.map((child,index)=>{
                const isLastItem = arrayChildren.length - 1 === index
                return <div style={{display: "flex"}}>{child}
                    {!isLastItem && <span style={{margin:"0 6px"}}>|</span>}
                </div>
            })
        }

    </div>
}