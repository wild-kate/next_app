import {FC} from "react";

import {
    MarketingCategoryInformation, RightBlockWrapper,
    TenderPrice,
    TenderPriceStatusWrapper,
    TenderPriceWrapper,
    TenderStatusWrapper,
    TenderSubStatus
} from "./styled";

export type PriceStatusTypes = {
    small?: boolean
}

const TenderPriceStatus:FC<PriceStatusTypes> =({small})=>{
    return <RightBlockWrapper small={small}>
        <MarketingCategoryInformation small={small}>
            Corporate
        </MarketingCategoryInformation>
        <TenderPriceStatusWrapper>
            <TenderStatusWrapper small={small}>
                В работе
            </TenderStatusWrapper>
            <TenderPriceWrapper small={small}>
                <TenderPrice small={small}>62 691.42 ₽</TenderPrice>
                <TenderSubStatus small={small}>Оценка ТВ/Расчет ЦД/Подан запрос разъяснений</TenderSubStatus>
            </TenderPriceWrapper>
        </TenderPriceStatusWrapper>
    </RightBlockWrapper>
}

export default TenderPriceStatus