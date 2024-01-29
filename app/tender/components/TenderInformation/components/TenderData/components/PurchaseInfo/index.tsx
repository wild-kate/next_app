import {FC} from "react";

import InfoRow from "../../../../../../GlobalComponents/InfoRow";
import {Subtitle} from "../../../../../../GlobalComponents/styled/Title";
import {DataComponentsWrapper} from "../../../../../../GlobalComponents/styled/Wrapper";

const PurchaseInfo:FC =()=>{
    return <DataComponentsWrapper>
        <Subtitle>Закупка №59962</Subtitle>
        <InfoRow title="Этап закупки">
            Подача заявок
        </InfoRow>
        <InfoRow title="Ответственный">
            Красильников Алексей Валерьевич
        </InfoRow>
        <InfoRow title="Регион поставки:">
            16 — Республика Татарстан
        </InfoRow>
        <InfoRow title="Регион поставки">
            52 – Нижегородская область
        </InfoRow>
        <InfoRow title="Тип услуги">
            Мобильная связь
        </InfoRow>
        <InfoRow title="Маркетинговая категория">
            Corporate
        </InfoRow>
        <InfoRow title="Добавлен по фильтру">
            молоко ниж обл
        </InfoRow>
        <InfoRow title="Номер продажи">
            №123456789012345...
        </InfoRow>
        <InfoRow title="Сумма контракта">
            62 691.42 ₽
        </InfoRow>
        <InfoRow title="Сумма ежемесячных платежей">
            62 691.42 ₽
        </InfoRow>
        <InfoRow title="Срок контракта (мес)">
            7
        </InfoRow>
        <InfoRow title="Сумма единовременных платежей">
            62 691.42 ₽
        </InfoRow>
        <InfoRow title="% снижения от НМЦК">
            0.13
        </InfoRow>
    </DataComponentsWrapper>
}

export default PurchaseInfo