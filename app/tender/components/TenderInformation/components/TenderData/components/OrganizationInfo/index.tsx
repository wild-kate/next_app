import {FC} from "react";
import {DataComponentsWrapper} from "../../../../../../../GlobalComponents/styled/Wrapper";
import {Subtitle} from "../../../../../../../GlobalComponents/styled/Title";
import InfoRow from "../../../../../../../GlobalComponents/InfoRow/index";



const OrganizationInfo:FC =()=>{
    return <DataComponentsWrapper>
        <Subtitle>Организатор</Subtitle>
        <div>ФГБОУ ВО КАЗАНСКИЙ ГМУ МИНЗДРАВА РОССИИЙ...</div>
        <div>52 – Нижегородская область</div>
        <div style={{display:"flex",gap:20}}>
            <InfoRow title="ИНН">
                7736050003
            </InfoRow>
            <InfoRow title="ОГРН">
                1027700070518
            </InfoRow>
        </div>
        <div>Контакты</div>
    </DataComponentsWrapper>
}

export default OrganizationInfo