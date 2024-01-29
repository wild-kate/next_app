import { FC } from "react";
import CalendarItem from "./components/CalendarItem";
import moment from "moment";

export enum TypesDate {
    START = "START",
    END = "END",
    AUCTION = "AUCTION"

}

const calendar = [
    {
        date: moment().startOf("month"),
        isRASCHET: false,
        type: TypesDate.START
    },
    {
        date: moment(),
        isRASCHET: true,
        type: TypesDate.AUCTION
    },
    {
        date: moment().endOf("month"),
        isRASCHET: true,
        type: TypesDate.END
    }
]

const TenderCalendar:FC =()=>{
    const date1 = moment("2023-10-01");
    const date2 = moment("2023-10-02");
    console.log(date2.isAfter(date1))
    return <div style={{display:"flex", gap:12, marginTop:"32px"}}>
        {
            calendar.map((calendarItem)=><CalendarItem date={calendarItem.date} isCalculated={calendarItem.isRASCHET} type={calendarItem.type}/>)
        }
    </div>
}

export default TenderCalendar