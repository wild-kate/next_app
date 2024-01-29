import {FC} from "react";

import style from "./Menu.module.scss"

const Menu:FC = () => {
    return <div className={style.menu}>
        <div>Закупки</div>
        <div>Организации</div>
        <div>Пользователи</div>
        <div>Администрирование</div>
    </div>

}

export default Menu