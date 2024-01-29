import { Input } from "antd"
import { FC } from "react"

const searchIcon = <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0208 11.578L14.8762 14.4326L13.9328 15.376L11.0782 12.5206C10.016 13.3721 8.69483 13.8352 7.3335 13.8333C4.0215 13.8333 1.3335 11.1453 1.3335 7.83331C1.3335 4.52131 4.0215 1.83331 7.3335 1.83331C10.6455 1.83331 13.3335 4.52131 13.3335 7.83331C13.3354 9.19465 12.8723 10.5158 12.0208 11.578ZM10.6835 11.0833C11.5296 10.2132 12.0021 9.04693 12.0002 7.83331C12.0002 5.25465 9.9115 3.16665 7.3335 3.16665C4.75483 3.16665 2.66683 5.25465 2.66683 7.83331C2.66683 10.4113 4.75483 12.5 7.3335 12.5C8.54712 12.5019 9.71342 12.0294 10.5835 11.1833L10.6835 11.0833Z" fill="#C9C9C9"/>
</svg>

const SearchString:FC<{placeholder?:string,isSearch?:boolean}> =({placeholder="Введите значение",isSearch})=>{
    return <Input placeholder={placeholder} suffix={isSearch ? searchIcon : undefined}/>
}

export default SearchString