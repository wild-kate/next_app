import {FC} from "react";

import Wrapper from "../../GlobalComponents/Wrapper";
import BackButton from "./components/BackButton";
import TenderActionButtons from "./components/TenderActionButtons";
import TenderCalendar from "./components/TenderCalendar";
import TenderData from "./components/TenderData";
import TenderPriceStatus from "./components/TenderPriceStatus";
import TenderTitle from "./components/TenderTitle";
import {FullTenderInfoWrapper, RightInfoBLockWrapper} from "./styled";
import style from "./tenderInformation.module.scss"

const TenderInformation:FC = () => {
    return <div className={style.tenderInformationWrapper}>
        <Wrapper>
            <BackButton/>
            <TenderTitle/>
            <FullTenderInfoWrapper>
                <TenderData/>
                <RightInfoBLockWrapper>
                    <TenderPriceStatus/>
                    <TenderActionButtons/>
                </RightInfoBLockWrapper>
            </FullTenderInfoWrapper>
            <TenderCalendar/>
        </Wrapper>
    </div>
}

export default TenderInformation