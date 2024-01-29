import {FC} from "react";

import Wrapper from "../../GlobalComponents/Wrapper"
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import ProfileIcon from "./components/ProfileIcon";
import style from "./Header.module.scss"

const Header:FC = () => {
    return <Wrapper>
        <div className={style.header}>
            <div className={style.mainMenu}>
                <Logo/>
                <Menu/>
            </div>
            <ProfileIcon/>
        </div>
    </Wrapper>
}

export default Header