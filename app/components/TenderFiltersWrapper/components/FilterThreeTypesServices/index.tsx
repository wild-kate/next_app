"use client"
import {DownOutlined} from "@ant-design/icons";
import {Tree, TreeDataNode} from "antd";
import {FC} from "react";


const dataTree:TreeDataNode[] = [
        {
            title: 'Не указано',
            key: '0-0',
        },
        {
            title: '#CloudMTS',
            key: '0-1',
            children: [
                    {
                        title: 'lalala',
                        key: '0-0-0',
                    },
                    {
                        title: 'papapa',
                        key: '0-0-1',
                    },
                ],
        },
        {
        title: 'B2B Стартапы',
        key: '0-2',
        },
        {
        title: 'BigData',
        key: '0-3',
        },
    {
        title: 'FIX',
        key: '0-4',
        children: [
            {
                title: 'lalala',
                key: '0-0-2',
            },
            {
                title: 'papapa',
                key: '0-0-3',
            },
        ],
    },
    {
        title: 'MOB',
        key: '0-5',
        children: [
            {
                title: 'lalala',
                key: '0-0-4',
            },
            {
                title: 'papapa',
                key: '0-0-5',
            },
        ],
    },
    {
        title: 'VAS-услуги',
        key: '0-6',
        children: [
            {
                title: 'lalala',
                key: '0-0-6',
            },
            {
                title: 'papapa',
                key: '0-0-7',
            },
        ],
    },
    {
        title: 'Оборудование',
        key: '0-7',
        children: [
            {
                title: 'lalala',
                key: '0-0-8',
            },
            {
                title: 'papapa',
                key: '0-0-9',
            },
        ],
    },
    {
        title: 'СИ - системная интеграция',
        key: '0-8',
        children: [
            {
                title: 'lalala',
                key: '0-1-0',
            },
            {
                title: 'papapa',
                key: '0-1-1',
            },
        ],
    },
    {
        title: 'Спутниковое ТВ',
        key: '0-9',
        children: [
            {
                title: 'lalala',
                key: '0-1-2',
            },
            {
                title: 'papapa',
                key: '0-1-3',
            },
        ],
    },
    {
        title: 'IoT',
        key: '1-0',
        children: [
            {
                title: 'lalala',
                key: '0-1-4',
            },
            {
                title: 'papapa',
                key: '0-1-5',
            },
        ],
    },
    ]

const FilterThreeTypesServices:FC =()=>{
        return <Tree
            checkable
            showLine
            switcherIcon={<DownOutlined/>}
            onSelect={()=>null}
            treeData={dataTree}
        />
}

export default FilterThreeTypesServices