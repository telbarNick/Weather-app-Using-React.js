import React from 'react'
import classes from './CurrentDay.module.css'


const CurrentDay = props => {
    let date = new Date();

    const dayTextHandler = () => {
        if (date.toString().slice(0,3) === 'Sat') {
            return 'Saturday'
        } else if (date.toString().slice(0,3) === 'Tue') {
            return 'Tuesday'
        } else if (date.toString().slice(0,3) === 'Wed') {
            return 'Wednesday'
        } else if (date.toString().slice(0,3) === 'Thu') {
            return 'Thursday'
        } else {
            return date.toString().slice(0,3) + 'day'
        }
    },
        dateTextHandler = () => {
            if (date.toString().slice(8,11)[0] === '0') {
                return date.toString().slice(8,11)[1]
            }
         }

    return (
        <div className={classes.CurrentDay}>
            <div className={classes.currDayBox}>
                <span className={classes.degree}>
                    {props.tempValue}&deg;C
                </span>
            </div>
            <div className={classes.daySpan}>
                <span>
                    {dayTextHandler()} &nbsp; {dateTextHandler() + 'th'}
                </span>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default CurrentDay