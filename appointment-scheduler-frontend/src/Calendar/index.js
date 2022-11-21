import React, { useState } from "react"
import { MONTHS } from "./conts"
import { CalendarBody, CalendarHead, HeadDay, SevenColGrid, StyledDay, Wrappper } from "./style"
import { areDatesTheSame, getDateObj, getDaysInMonth, getSortedDays, range } from "./utils"
import "./index.css"
import BasicForm from "./form";

export const Calendar = ({ startingDate }) => {
    const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
    const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());

    const [showResults, setShowResults] = useState(false)
    

    const DAYSINMONTH = getDaysInMonth(currentMonth, currentYear);
    // const [isAvailablePage, setisAvailablePage] = useState(false)
    const nextMonth = () => {
        if (currentMonth < 11) {
            setCurrentMonth((prev) => prev + 1)
        }
        else {
            setCurrentMonth(0);
            setCurrentYear((prev) => prev + 1);
        }
    };
    const prevMonth = () => {
        if (currentMonth > 0) {
            setCurrentMonth((prev) => prev - 1)
        }
        else {
            setCurrentMonth(11);
            setCurrentYear((prev) => prev - 1);
        }
    };
    // const dateClicked = (day, month, year) => {
    //     console.log(e.target.value)
    //     console.log(day)
    //     console.log(month)
    //     console.log(year)
    //     setisAvailablePage(true)
    // }
    return (
        <Wrappper >
            <CalendarHead>
                <ion-icon
                    onClick={prevMonth}
                    style={{ cursor: 'pointer' }}
                    name="arrow-back-circle-outline"></ion-icon>
                <p>{MONTHS[currentMonth]} {currentYear}</p>
                <ion-icon
                    onClick={nextMonth}
                    style={{ cursor: 'pointer' }}
                    name="arrow-forward-circle-outline"></ion-icon>
            </CalendarHead>
            <SevenColGrid>
                {getSortedDays(currentMonth, currentYear).map((day) => (
                    <HeadDay>{day}</HeadDay>
                ))}
            </SevenColGrid>
            {
                showResults && 
                // <div style={{position: "fixed"}}>
                    <BasicForm />
                // </div>
            }
            <CalendarBody fourCol={DAYSINMONTH === 28}>
                {range(getDaysInMonth(currentMonth, currentYear)).map((day) => (
                    <StyledDay
                        // onClick={() => { dateClicked(day, currentMonth, currentYear) }}
                        onClick={()=>setShowResults(!showResults)}
                        style={{ cursor: 'pointer' }}
                        active={areDatesTheSame(
                            new Date(),
                            getDateObj(day, currentMonth, currentYear)
                        )}
                    >{day}
                    </StyledDay>
                ))}
                

                {/*{
                isAvailablePage == true ?
                    <div className="showPage">
                        <div>hello</div>
                    </div> :
                    <div></div>
            }*/}
            </CalendarBody>
        </Wrappper>
    )
}