import {FC} from "react";

import InfoRow from "../../../../../../../../GlobalComponents/InfoRow";
import TenderPriceStatus from "../../../../../../../TenderInformation/components/TenderPriceStatus";
import TenderProps from "../../../../../../../TenderInformation/components/TenderTitle/components/TenderProps";
import {
    GridCardInformationWrapper, GridCardNoticeWrapper,
    GridCardNumberWrapper, GridCardPurchaseInfo, GridCardPurchaseInfoWrapper,
    GridCardStatusWrapper,
    GridCardTitle,
    GridCardTitleWrapper,
    GridCardWrapper,
    GridNumberWrapper
} from "./styled";

const gridCardIcon = <svg width="96" height="106" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="48" cy="48" r="48" fill="#F2F3F7"/>
    <g filter="url(#filter0_ddd_13994_9548)">
        <path d="M28.1009 72.3687C27.1712 72.3687 26.4274 71.6141 26.4165 70.6844V70.6734V25.3266C26.4165 22.4391 28.7353 20 31.6993 20H35.2978C36.2274 20 36.9821 20.7547 36.9821 21.6953V67.0531C36.9821 67.9937 36.2274 68.7484 35.2978 68.7484H31.6993C30.6384 68.7484 29.7853 69.6125 29.7853 70.6844C29.7743 71.6141 29.0306 72.3687 28.1009 72.3687Z" fill="#B66FBC"/>
        <path d="M67.7169 68.7484H35.2981C34.3685 68.7484 33.6138 67.9937 33.6138 67.0531V21.6953C33.6247 20.7547 34.3685 20 35.2981 20H67.7169C68.6466 20 69.4013 20.7547 69.4013 21.6953V67.0531C69.4013 67.9828 68.6466 68.7484 67.7169 68.7484Z" fill="#D492D6"/>
        <path d="M31.6997 67.0531C29.7091 67.0531 28.0903 68.6828 28.0903 70.6844C28.0903 72.6969 29.7091 74.3156 31.6997 74.3156L67.5966 74.2937V67.0422L31.6997 67.0531Z" fill="#E5E5E5"/>
        <path d="M67.5964 67.0531H51.5073V74.3156L67.5964 74.3047V67.0531Z" fill="#D9D9D9"/>
        <path d="M56.9105 61.4859H46.1043C45.1746 61.4859 44.4199 60.7312 44.4199 59.7906C44.4199 58.85 45.1746 58.0953 46.1043 58.0953H56.9105C57.8402 58.0953 58.5949 58.85 58.5949 59.7906C58.5949 60.7312 57.8402 61.4859 56.9105 61.4859Z" fill="#B66FBC"/>
        <path d="M60.5197 54.2344H42.5057C41.576 54.2344 40.8213 53.4797 40.8213 52.5391C40.8213 51.5984 41.576 50.8438 42.5057 50.8438H60.5197C61.4494 50.8438 62.2041 51.5984 62.2041 52.5391C62.2041 53.4797 61.4494 54.2344 60.5197 54.2344Z" fill="#B66FBC"/>
        <path d="M67.7165 72.6094H31.6993C30.6384 72.6094 29.7743 71.7453 29.7743 70.6734C29.7743 69.6015 30.6384 68.7484 31.6993 68.7484L67.7165 68.7375C68.6462 68.7375 69.4009 67.9828 69.4009 67.0422C69.4009 66.1016 68.6462 65.3469 67.7165 65.3469H31.6993C28.7899 65.3578 26.4165 67.7422 26.4165 70.6734C26.4165 73.6156 28.7899 76 31.6993 76H67.7165C68.6462 76 69.4009 75.2453 69.4009 74.3047C69.4009 73.3641 68.6462 72.6094 67.7165 72.6094Z" fill="#984CA3"/>
        <path d="M65.365 35.1157V37.4453C65.365 38.3422 64.6103 39.0969 63.7135 39.0969H58.901C58.0041 39.0969 57.2494 38.3422 57.2494 37.4453V36.0891H59.4478V37.2157C59.4478 37.4563 59.6338 37.6313 59.8635 37.6313H62.7838C63.0135 37.6313 63.1775 37.4453 63.1775 37.2157V35.575C63.1775 35.3344 63.0135 35.1594 62.7838 35.1594H59.3932L59.3713 33.7157H62.7838C63.0135 33.7157 63.1775 33.5516 63.1775 33.3V31.8563C63.1775 31.6266 63.0135 31.4407 62.7838 31.4407H59.8635C59.6338 31.4407 59.4478 31.6266 59.4478 31.8563V32.786H57.2494V31.6266C57.2494 30.7297 58.0041 29.975 58.901 29.975H63.7135C64.6103 29.975 65.365 30.7297 65.365 31.6266V33.6172L64.6213 34.361L65.365 35.1157ZM55.1385 37.6203V39.0969H47.3619V36.0125C47.3619 35.05 48.051 34.4813 49.0025 34.361L52.8963 33.8797C53.126 33.8469 53.29 33.7157 53.29 33.486V31.8782C53.29 31.6485 53.126 31.4625 52.8963 31.4625H49.976C49.7463 31.4625 49.5604 31.6485 49.5604 31.8782V32.8078H47.3619V31.6485C47.3619 30.7516 48.1166 29.9969 49.0135 29.9969H53.826C54.7229 29.9969 55.4775 30.7516 55.4775 31.6485V33.65C55.4775 34.6125 54.8104 35.1703 53.8479 35.3016L49.9541 35.7828C49.7135 35.8157 49.5385 35.9469 49.5385 36.1766V37.6203H55.1385ZM45.2619 37.6203V39.0969H37.4854V36.0125C37.4854 35.05 38.1744 34.4813 39.126 34.361L43.0197 33.8797C43.2494 33.8469 43.4135 33.7157 43.4135 33.486V31.8782C43.4135 31.6485 43.2494 31.4625 43.0197 31.4625H40.0994C39.8697 31.4625 39.6838 31.6485 39.6838 31.8782V32.8078H37.4854V31.6485C37.4854 30.7516 38.24 29.9969 39.1369 29.9969H43.9494C44.8463 29.9969 45.601 30.7516 45.601 31.6485V33.65C45.601 34.6125 44.9338 35.1703 43.9713 35.3016L40.0775 35.7828C39.8369 35.8157 39.6619 35.9469 39.6619 36.1766V37.6203H45.2619Z" fill="white"/>
    </g>
    <defs>
        <filter id="filter0_ddd_13994_9548" x="0" y="10" width="96" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13994_9548"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="3"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_13994_9548" result="effect2_dropShadow_13994_9548"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="10"/>
            <feGaussianBlur stdDeviation="10"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_13994_9548" result="effect3_dropShadow_13994_9548"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_13994_9548" result="shape"/>
        </filter>
    </defs>
</svg>

const GridCard:FC =()=>{
    return <GridCardWrapper>
        <GridCardNumberWrapper>
            <div style={{padding:"1.5px 13.5px"}}>{gridCardIcon}</div>
            <GridNumberWrapper>
                <div>
                    <div>Закупка</div>
                    <div>№59962</div>
                </div>
                <div>
                    <div>Продажа</div>
                    <div style={{whiteSpace:"nowrap",overflow:"hidden",maxWidth:123,textOverflow:"ellipsis"}}>Q-20211021-000834529576395763</div>
                </div>
            </GridNumberWrapper>
        </GridCardNumberWrapper>
        <GridCardInformationWrapper>
            <GridCardTitleWrapper>
                <TenderProps/>
                <GridCardTitle>
                    Выполнение работ по устройству инженерно-технических систем обеспечения безопасности дорожного движения и дорожных сооружений на автомобильных дорогах Челябинской области (дооборудование д...
                </GridCardTitle>
            </GridCardTitleWrapper>
            <GridCardNoticeWrapper>
                <InfoRow title={"Извещение №"} small>kon_888866664322223455000000_333355555677777889990</InfoRow>
                <InfoRow title={"ИКЗ"} small>212422201672142220100100150020000244</InfoRow>
            </GridCardNoticeWrapper>
            <GridCardPurchaseInfoWrapper>
                <GridCardPurchaseInfo>
                    <InfoRow title={"Организатор"} small>ФГБОУ ВО КАЗАНСКИЙ ГМУ МИНЗДРА...</InfoRow>
                    <InfoRow title={"ИНН"} small>7736050003</InfoRow>
                    <InfoRow title={"52 – Нижегородская область"} small/>
                    <InfoRow title={"Заказчик"} small>ООО "НПО "Диагностические системы"</InfoRow>
                    <InfoRow title={"ИНН"} small>1653016921</InfoRow>
                    <InfoRow title={"Регион поставки"} small></InfoRow>
                </GridCardPurchaseInfo>
                <GridCardPurchaseInfo>
                    <InfoRow title={"Ответственный"} small>Красильников Алексей Валерьевич</InfoRow>
                    <InfoRow title={"Тип услуги"} small>FIX / Телефония</InfoRow>
                    <InfoRow title={"Начало подачи заявок"} small>29 сен. 2020 г.</InfoRow>
                    <InfoRow title={"Окончание подачи заявок"} small>30 дек. 2020 г.</InfoRow>
                    <InfoRow title={"Проведение аукциона"} small>19 янв. 2021 г.</InfoRow>
                    <InfoRow title={"Добавлен по фильтру"} small>молоко ниж обл </InfoRow>
                </GridCardPurchaseInfo>
            </GridCardPurchaseInfoWrapper>
        </GridCardInformationWrapper>
        <GridCardStatusWrapper>
            <TenderPriceStatus small/>
        </GridCardStatusWrapper>
    </GridCardWrapper>
}

export default GridCard