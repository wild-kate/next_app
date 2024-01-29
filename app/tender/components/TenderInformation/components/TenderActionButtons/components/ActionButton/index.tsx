'use client'
import {FC, useCallback, useState} from "react";

import {LineMenuRow, MenuBackground, MenuFunctionRow, MenuRow, MenuWrapper} from "./styled";
import CustomButton from "../../../../../../../GlobalComponents/CustomButton/index";


const ActionButton:FC =()=>{
    const [menuVisible,setMenuVisible] = useState<boolean>(false)
    const onHover = useCallback(()=>{
        setMenuVisible(true)
    },[])
    const onHoverEnd = useCallback(()=>{
        setMenuVisible(false)
    },[])
    return <div style={{width:"100%",position:"relative"}} onMouseEnter={onHover} onMouseLeave={onHoverEnd}>
        <CustomButton
            after={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8.00048 8.78133L11.3005 5.48133L12.2431 6.424L8.00048 10.6667L3.75781 6.424L4.70048 5.48133L8.00048 8.78133Z" fill="#001424"/>
                    </svg>}
        >
            Действия
        </CustomButton>
        {
            menuVisible && <MenuWrapper>
                <MenuBackground>
                <MenuRow>Редактировать</MenuRow>
                <MenuRow>Создать продажу</MenuRow>
                <MenuFunctionRow>
                    <LineMenuRow style={{flexBasis:"13px"}}/>
                        Распределения
                    <LineMenuRow/>
                </MenuFunctionRow>
                <MenuRow>Распределить и создать продажу</MenuRow>
                <MenuRow>Распределить</MenuRow>
                <MenuFunctionRow>
                    <LineMenuRow style={{flexBasis:"13px"}}/>
                        Дополнительно
                    <LineMenuRow/>
                </MenuFunctionRow>
                <MenuRow>Расширенное редактирование</MenuRow>
            </MenuBackground>
            </MenuWrapper>
        }
    </div>

}

export default ActionButton