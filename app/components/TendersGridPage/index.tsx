
import {FC} from "react";

import TenderFiltersWrapper from "./components/TenderFiltersWrapper";
import TenderGridWrapper from "./components/TenderGridWrapper";
import Wrapper from "../../GlobalComponents/Wrapper/index";

const TenderGridPage:FC =()=>{
    return <Wrapper>
          <div style={{display:"flex", gap: 24}}>
            <TenderGridWrapper/>
            <TenderFiltersWrapper/>
          </div>
    </Wrapper>
}

export default TenderGridPage