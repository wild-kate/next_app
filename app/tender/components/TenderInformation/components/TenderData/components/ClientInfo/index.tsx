import {FC} from "react";
import {DataComponentsWrapper} from "../../../../../../../GlobalComponents/styled/Wrapper";
import {Subtitle} from "../../../../../../../GlobalComponents/styled/Title";
import InfoRow from "../../../../../../../GlobalComponents/InfoRow/index";



const ClientInfo:FC =()=>{
    return <DataComponentsWrapper>
        <Subtitle>Клиент</Subtitle>
        <div>АО «Нижегородский водоканал»</div>
        <div>52 – Нижегородская область</div>
        <div style={{display:"flex",gap:20}}>
            <InfoRow title="ИНН">
                7707049388
            </InfoRow>
            <InfoRow title="ОГРН">
                1027700070518
            </InfoRow>
        </div>
        <div>Контакты</div>
    </DataComponentsWrapper>
}

export default ClientInfo