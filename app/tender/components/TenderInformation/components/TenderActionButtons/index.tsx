import {FC} from "react";

import ActionButton from "./components/ActionButton";
import {TenderActionButtonWrapper} from "./styled";
import CustomButton from "../../../../../GlobalComponents/CustomButton/index";

const TenderActionButtons:FC =()=>{
    return <TenderActionButtonWrapper>
        <ActionButton/>
        <CustomButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8.00027 12.1733L3.29827 14.8053L4.34827 9.52L0.391602 5.86133L5.74293 5.22667L8.00027 0.333332L10.2576 5.22667L15.6089 5.86133L11.6523 9.52L12.7023 14.8053L8.00027 12.1733Z" fill="#FF9A2E"/>
            </svg>
        </CustomButton>
    </TenderActionButtonWrapper>
}

export default TenderActionButtons