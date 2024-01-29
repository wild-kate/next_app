
import {NextPage} from "next";
import TenderInformation from "./components/TenderInformation/index";
import TenderTabs from "./components/TenderTabs/index";

const TenderPage:NextPage =()=>{
    return  <>
        <TenderInformation/>
        <TenderTabs/>
    </>
}

export default TenderPage