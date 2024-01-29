import SearchString from "GlobalComponents/SearchString"
import { FC } from "react"

import TitleCounter from "../../../../GlobalComponents/TitleCounter";
import GridActions from "./components/GridActions"
import TenderGrid from "./components/TenderGrid";
import {TenderGridHeaderWrapper, TenderGridMainWrapper, TenderGridTitleSearchWrapper} from "./styled";


const TenderGridWrapper:FC =()=>{
    return <TenderGridMainWrapper>
        <TenderGridHeaderWrapper>
            <TenderGridTitleSearchWrapper>
                <TitleCounter title={"Закупки"} count={9914}/>
                <SearchString placeholder={"ИНН, номер закупки, номер продажи, номер извещения, наименование закупки, организация, ОГРН"} isSearch/>
            </TenderGridTitleSearchWrapper>
            <GridActions/>
        </TenderGridHeaderWrapper>
        <TenderGrid/>
    </TenderGridMainWrapper>
}

export default TenderGridWrapper