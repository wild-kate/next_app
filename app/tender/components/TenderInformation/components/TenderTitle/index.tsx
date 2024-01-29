import {FC} from "react";

import TenderProps from "./components/TenderProps";
import style from "./TenderTitle.module.scss"
import InfoRow from "../../../../../GlobalComponents/InfoRow/index";

const TenderTitle:FC =()=>{
    return <div>
        <TenderProps/>
        <div className={style.tenderSubject}>Поставка продуктов питания (молоко сухое)</div>
        <InfoRow title="ИКЗ">
            212422201672142220100100150020000244
        </InfoRow>
    </div>
}

export default TenderTitle