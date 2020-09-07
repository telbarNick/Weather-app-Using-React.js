import React from 'react';
import classes from './Days.module.css';


const Days = (props) => {
    const dayTextHandler = () => {
        if (props.days.toString().slice(0, 3) === 'Sat') {
            return 'Saturday'
        } else if (props.days.toString().slice(0, 3) === 'Tue') {
            return 'Tuesday'
        } else if (props.days.toString().slice(0, 3) === 'Wed') {
            return 'Wednesday'
        } else if (props.days.toString().slice(0, 3) === 'Thu') {
            return 'Thursday'
        } else {
           return props.days.toString().slice(0, 3) + 'day'
        }
    }

return (
    <div className={classes.Days}>
        <p className={classes.Nums}>
            <span>{props.daysTempMax}&deg;</span> &nbsp;&nbsp;
            <span style={{
                color: '#ccc'
            }}>{props.daysTempMin}&deg;</span>
        </p>
        <p className={classes.daySpan}>{dayTextHandler()}</p>
    </div>
)

}

export default Days
