import {DownOutlined} from "@ant-design/icons";
import {Tree, TreeDataNode} from "antd";
import {FC} from "react";

const dataTree:TreeDataNode[] = [
    {
        title:"Назначено",
        key:1,
    },
    {
        title:"Назначено ответственному",
        key:2,
    },
    {
        title:"СИ",
        key:3,
    },
    {
        title:"В работе",
        key:4,
        children:[
            {
                title:"Оценка ТВ/Расчет ЦД/Подан запрос разъяснений",
                key:"4-4",
            },
            {
                title:"Формирование заявки",
                key:"4-4-1",
            },
        ]
    },
    {
        title:"Не участвуем",
        key:5,
        children:[
            {
                title:"Не участвуем",
                key:"5-5",
            },
        ]
    },
    {
        title:"Мониторинг цен",
        key:6,
        children:[
            {
                title:"Мониторинг цен",
                key:"6-6",
            },
        ]
    },
    {
        title:"Объявлен",
        key:7,
    },
    {
        title:"Выигран/Победа",
        key:8,
        children:[
            {
                title:"Выигран/Победа",
                key:"8-8",
            },
        ]
    },
    {
        title:"Подана",
        key:9,
    },
    {
        title:"Проигран",
        key:10,
        children:[
            {
                title:"Проигран",
                key:"10-10",
            },
        ]
    },
    {
        title:"Заявка отклонена",
        key:11,
        children:[
            {
                title:"Заявка отклонена",
                key:"11-11",
            },
        ]
    },
    {
        title:"Закупка у ед.поставщика",
        key:12,
    },
    {
        title:"СМП",
        key:13,
        children:[
            {
                title:"СМП",
                key:"13-13",
            },
        ]
    },
    {
        title:"Неверное распределение",
        key:14,
        children:[
            {
                title:"Неверное распределение",
                key:"14-14",
            },
        ]
    },
    {
        title:"Отменен",
        key:15,
        children:[
            {
                title:"Отменен",
                key:"15-15",
            },
        ]
    },
    {
        title:"Не состоялся",
        key:16,
    },
    {
        title:"Ошибочный",
        key:17,
    },
]

const FiltersTreeStatus:FC =()=>{
    return <Tree
            checkable
            showLine
            switcherIcon={<DownOutlined/>}
            onSelect={()=>null}
            treeData={dataTree}
        />
}

export default FiltersTreeStatus