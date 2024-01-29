import {Select} from "antd";
import {FC} from "react";

const handleChange = (value: number[]) => {
    console.log(`selected ${value}`);
};

const FilterSelectRow:FC =()=>{
    return <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Выберите или введите запрос"
        onChange={handleChange}
        options={[
            { value: '1', label: 'Чириков Алексей' },
            { value: '2', label: 'Гаврилова Светлана' },
            { value: '3', label: 'Колосов Алексей' },
        ]}
    />

}

export default FilterSelectRow