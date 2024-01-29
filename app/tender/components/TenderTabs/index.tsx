"use client"
import { Tabs, TabsProps } from "antd";
import { FC } from "react"
import Wrapper from "GlobalComponents/Wrapper";

const onChange = (key: string) => {
    console.log(key);
  };
  
  const Test:FC =()=>{
    return <div>жопа</div>
}

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Параметры закупки',
      children: <Test/>,
    },
    {
      key: '2',
      label: 'Заказчики',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'История изменений',
      children: 'Content of Tab Pane 3',
    },
    {
        key: '4',
        label: 'Протоколы и участники',
        children: 'Content of Tab Pane 3',
      },
      {
        key: '5',
        label: 'Товары',
        children: 'Content of Tab Pane 3',
      },
      {
        key: '6',
        label: 'Документы',
        children: 'Content of Tab Pane 3',
      },
      {
        key: '7',
        label: 'Контракты',
        children: 'Content of Tab Pane 3',
      },
  ];

const TenderTabs:FC = ()=> 
<Wrapper>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
</Wrapper>;

export default TenderTabs
