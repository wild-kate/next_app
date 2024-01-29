import {Select} from "antd";
import {FC} from "react";

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const FilterSelectRowWithoutMemory:FC =()=>{
    return <Select
        defaultValue="Выберите из списка"
        style={{ width:"100%"}}
        onChange={handleChange}
        options={[
            { value: '1', label: 'Пупино' },
            { value: '2', label: 'Лупино' },
            { value: '3', label: 'Лёликово' },
            { value: '4', label: 'Боликово'},
        ]}
    />
}

export default FilterSelectRowWithoutMemory