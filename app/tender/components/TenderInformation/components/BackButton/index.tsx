import {FC} from "react";

import style from "./backButton.module.scss"

const BackButton:FC = () => {
    return <div className={style.backButton}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path d="M5.21899 7.83333H13.3337V9.16667H5.21899L8.79499 12.7427L7.85232 13.6853L2.66699 8.5L7.85232 3.31467L8.79499 4.25733L5.21899 7.83333Z" fill="#2872B9"/>
        </svg>
        <div className={style.backButtonText}>
            К списку организаций
        </div>
    </div>
}

export default BackButton