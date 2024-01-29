import { FC } from "react";

import GridCard from "./components/GridCard";
import {TenderGridSubWrapper} from "./styled";

const TenderGrid:FC =()=>{
    return <TenderGridSubWrapper>
        {
           new Array(5).fill(0).map((_,index)=><GridCard key={index}/>)
        }
    </TenderGridSubWrapper>
}

export default TenderGrid