import {FC} from "react";

import ClientInfo from "./components/ClientInfo";
import OrganizationInfo from "./components/OrganizationInfo";
import PurchaseInfo from "./components/PurchaseInfo";

const TenderData:FC =()=>{
    return <div style={{display:"flex",gap:64,marginTop:14.5}}>
        <PurchaseInfo/>
        <OrganizationInfo/>
        <ClientInfo/>
    </div>
}

export default TenderData