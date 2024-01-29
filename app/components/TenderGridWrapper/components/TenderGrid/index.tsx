import { FC } from "react";

import GridCard from "./components/GridCard";
import {TenderGridSubWrapper} from "./styled";

const TenderGrid:FC =()=>{
    return <TenderGridSubWrapper>
        {
           new Array(5).fill(0).map(()=><GridCard/>)
        }
    </TenderGridSubWrapper>
}

export default TenderGrid