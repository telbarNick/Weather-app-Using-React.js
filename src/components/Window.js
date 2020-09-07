import React from 'react'
import classes from './Window.module.css'
import Days from './days/Days.js';
import CurrentDay from './days/CurrentDay.js';

const Window = props => {
    const Error = {
        display: () => {
            if (props.error) {
                return 'block'
            } else return 'none'
        },
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fc3a30',
        textTransform: 'uppercase'
    }

    return (
        <div className={classes.Window}>
            <div className={classes.Blur}></div>
            <div className={classes.Info}>
                <CurrentDay description={props.description} tempValue={props.tempValue} currentDay={props.currentDay}/>
            <div style={Error}>
                {props.error}
            </div>
            <div className={classes.LowerBox}>
            {props.daysArr.map((item, index) => {
                    return (
                        <Days days={item} key={index} 
                        daysTempMax={props.daysTemp.length > 0 ? Math.round(props.daysTemp[index + 1].temp.max) : '-'}
                        daysTempMin={props.daysTemp.length > 0 ? Math.round(props.daysTemp[index + 1].temp.min) : '-'}
                        iconId={props.daysTemp.length > 0 ? props.daysTemp[index + 1].weather[0].icon : 'unknown'}
                        />
                        ) 
                    })
                }   
            </div>
            </div>
        </div>
    )
}

export default Window