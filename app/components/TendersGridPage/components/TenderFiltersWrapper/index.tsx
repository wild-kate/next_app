import {PlusOutlined, QuestionCircleOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Badge, Button, Tooltip} from "antd";
import { FC } from "react"

import FilterSelectRow from "./components/FilterSelectRow";
import FilterSelectRowWithoutMemory from "./components/FilterSelectRowWithoutMemory";
import FiltersTreeStatus from "./components/FiltersTreeStatus";
import FilterThreeTypesServices from "./components/FilterThreeTypesServices";
import {
    FiltersSelectSubTitle, OneTenderTypeWrapper,
    TenderFiltersHeader,
    TenderFiltersMainWrapper,
    TenderFiltersRegionWrapper,
    TenderFiltersSelectTitleWrapper, TenderFiltersSelectWithTitleWrapper,
    TenderFiltersSelectWrapper,
    TenderFiltersSubTitleWrapper, TenderFiltersTenderTypeWrapper,
    TenderFiltersTitle,
    TenderFiltersTitleWrapper,
    TenderFiltersTreeWrapper,
    TenderStatusFiltersWrapper, TenderTypesButtonsWrapper, TenderTypesWrapper
} from "./styled";


const TenderFiltersWrapper:FC =()=>{
    return <TenderFiltersMainWrapper>
        <TenderFiltersHeader>
            <TenderFiltersTitleWrapper>
                <div>
                    <Badge count={5} offset={[12, 5]} color="#E30611" size="small" >
                        <TenderFiltersTitle>Фильтр</TenderFiltersTitle>
                    </Badge>
                </div>
                <Button type="link" size="small">Сбросить всё</Button>
            </TenderFiltersTitleWrapper>
            <Button icon={<PlusOutlined style={{color:"#565656"}}/>} type="link" size="small"></Button>
            <Button icon={<UnorderedListOutlined style={{color:"#565656"}}/>} type="link" size="small"></Button>
        </TenderFiltersHeader>
        <TenderStatusFiltersWrapper>
            <TenderFiltersSubTitleWrapper>
                <TenderFiltersTitle small={true}>Статус</TenderFiltersTitle>
                <Button type="link" size="small">Сбросить</Button>
            </TenderFiltersSubTitleWrapper>
            <TenderFiltersTreeWrapper>
                <FiltersTreeStatus/>
            </TenderFiltersTreeWrapper>
            <TenderFiltersSelectWrapper>
                <TenderFiltersSelectTitleWrapper>
                    <TenderFiltersTitle small={true}>Ответственный</TenderFiltersTitle>
                    <Tooltip placement="top" title={"Выпадающий список содержит топ 20 пользователей, остальных можно найти с помощью поиска в данном поле"}>
                        <Button type="link" size="small" icon={<QuestionCircleOutlined style={{color:"#565656"}}/>}></Button>
                    </Tooltip>
                </TenderFiltersSelectTitleWrapper>
                <FilterSelectRow/>
            </TenderFiltersSelectWrapper>
            <TenderFiltersSubTitleWrapper>
                <TenderFiltersTitle small={true}>Тип услуги</TenderFiltersTitle>
                <Button type="link" size="small">Сбросить</Button>
            </TenderFiltersSubTitleWrapper>
            <TenderFiltersTreeWrapper>
                <FilterThreeTypesServices/>
            </TenderFiltersTreeWrapper>
            <TenderFiltersSelectWrapper>
                <TenderFiltersSubTitleWrapper>
                    <TenderFiltersTitle small={true}>Маркетинговая категория</TenderFiltersTitle>
                    <Button type="link" size="small">Сбросить</Button>
                </TenderFiltersSubTitleWrapper>
                <FilterSelectRow/>
            </TenderFiltersSelectWrapper>
            <TenderFiltersRegionWrapper>
                <TenderFiltersTitle small={true}>Регион</TenderFiltersTitle>
                <TenderFiltersSelectWithTitleWrapper>
                    <FiltersSelectSubTitle>Место поставки товара</FiltersSelectSubTitle>
                    <FilterSelectRowWithoutMemory/>
                </TenderFiltersSelectWithTitleWrapper>
                <TenderFiltersSelectWithTitleWrapper>
                    <TenderFiltersSelectTitleWrapper>
                        <FiltersSelectSubTitle>Регион поставки</FiltersSelectSubTitle>
                        <Tooltip placement="top" title={"ляляляляля"}>
                            <Button type="link" size="small" icon={<QuestionCircleOutlined style={{color:"#565656"}}/>}></Button>
                        </Tooltip>
                    </TenderFiltersSelectTitleWrapper>
                    <FilterSelectRowWithoutMemory/>
                </TenderFiltersSelectWithTitleWrapper>
                <TenderFiltersSelectWithTitleWrapper>
                    <FiltersSelectSubTitle>Регион заказчика</FiltersSelectSubTitle>
                    <FilterSelectRowWithoutMemory/>
                </TenderFiltersSelectWithTitleWrapper>
                <TenderFiltersSelectWithTitleWrapper>
                    <FiltersSelectSubTitle>Регион организатора</FiltersSelectSubTitle>
                    <FilterSelectRowWithoutMemory/>
                </TenderFiltersSelectWithTitleWrapper>
            </TenderFiltersRegionWrapper>
            <TenderFiltersTenderTypeWrapper>
                <TenderFiltersTitle small={true}>Тип закупки</TenderFiltersTitle>
                <TenderTypesWrapper>
                    <OneTenderTypeWrapper>
                        <span style={{fontSize:14, color:"#00CC9A"}}>615 ПП</span>
                        <span style={{verticalAlign:"sub",fontSize:10}}>74</span>
                    </OneTenderTypeWrapper>
                    <OneTenderTypeWrapper>
                        <span style={{fontSize:14,color:"#AD64FF"}}>223 ФЗ</span>
                        <span style={{verticalAlign:"sub",fontSize:10}}>126</span>
                    </OneTenderTypeWrapper>
                    <OneTenderTypeWrapper>
                        <span style={{fontSize:14,color:"#333333"}}>Малая</span>
                        <span style={{verticalAlign:"sub",fontSize:10}}>1058</span>
                    </OneTenderTypeWrapper>
                    <OneTenderTypeWrapper>
                        <span style={{fontSize:14,color:"#FF9A2E"}}>44 ФЗ</span>
                        <span style={{verticalAlign:"sub",fontSize:10}}>5094</span>
                    </OneTenderTypeWrapper>
                </TenderTypesWrapper>
                <TenderTypesButtonsWrapper>
                    <Button type="link" size="small">Выбрать все</Button>
                    <Button type="link" size="small">Отменить все</Button>
                </TenderTypesButtonsWrapper>
            </TenderFiltersTenderTypeWrapper>
        </TenderStatusFiltersWrapper>
    </TenderFiltersMainWrapper>
}

export default TenderFiltersWrapper