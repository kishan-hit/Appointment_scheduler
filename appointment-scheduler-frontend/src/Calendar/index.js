import { useState } from "react"
import { DAYS,MONTHS } from "./conts"
import { CalendarBody, CalendarHead, HeadDay, SevenColGrid, StyledDay, Wrappper } from "./style"
import { areDatesTheSame, getDateObj, getDaysInMonth, getSortedDays, range } from "./utils"

export const Calendar = ({startingDate}) => {
    const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
    const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());
    const DAYSINMONTH = getDaysInMonth(currentMonth, currentYear);
    const nextMonth = () => {
        if(currentMonth < 11){
            setCurrentMonth((prev) => prev + 1)
        }
        else{
            setCurrentMonth(0);
            setCurrentYear((prev) => prev + 1);
        }
    };
    const prevMonth = () => {
        if(currentMonth > 0){
            setCurrentMonth((prev) => prev - 1)
        }
        else{
            setCurrentMonth(11);
            setCurrentYear((prev) => prev - 1);
        }
    };
    return(
        <Wrappper>
            <CalendarHead>
            <ion-icon 
            onClick = {prevMonth}
            style={{cursor:'pointer'}}
            name="arrow-back-circle-outline"></ion-icon>
            <p>{MONTHS[currentMonth]} {currentYear}</p>
            <ion-icon 
            onClick = {nextMonth}
            style={{cursor:'pointer'}}
            name="arrow-forward-circle-outline"></ion-icon>
            </CalendarHead>
            <SevenColGrid>
                {getSortedDays(currentMonth, currentYear).map((day) => (
                    <HeadDay>{day}</HeadDay>
                ))}
            </SevenColGrid>
            <CalendarBody fourCol={DAYSINMONTH === 28}>
                    {range(getDaysInMonth(currentMonth,currentYear)).map((day) => (
                        <StyledDay
                            style={{cursor:'pointer'}}
                            active={areDatesTheSame(
                                new Date(),
                                getDateObj(day, currentMonth, currentYear)
                            )}
                        >{day}</StyledDay>
                    ))}
                </CalendarBody>
        </Wrappper>
    )
}