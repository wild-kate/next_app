"use client"
import {FC} from "react";

import Wrapper from "../../GlobalComponents/Wrapper"
import Logo from "./components/Logo";

import ProfileIcon from "./components/ProfileIcon";
import style from "./Header.module.scss"
import MenuLinkButton from "./components/Menu/index";
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";

const menuLinkButtonsArray = [
    {
        name:"Закупки",
        link:"/",
        routes:["/tender","/tenders","/"]
    },
    {
        name:"Организации",
        link:"/organizations",
        routes:["/organizations"]
    },
    {
        name:"Пользователи",
        link:"/users",
        routes:["/users"]
    },
    {
        name:"Администрирование",
        link:"/admin",
        routes:["/admin"]
    },
]

const Header:FC = () => {
    const pathname = usePathname()
    return <div style={{backgroundColor:"#FFF", color: "#fff"}}>
        <Wrapper>
            <div className={style.header}>
                <div className={style.mainMenu}>
                    <Logo/>
                    {
                        menuLinkButtonsArray.map(button => {
                            return <MenuLinkButton name={button.name} key={button.link} active={button.routes.includes(pathname)}/>
                        })
                    }
                </div>
                <ProfileIcon/>
            </div>
        </Wrapper>
    </div>
}

export default Header