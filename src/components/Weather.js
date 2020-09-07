import React from 'react';
import classes from './Weather.module.css';
import Window from './Window.js';

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            days: [
                    this.plus24(Date.now(), 24),
                    this.plus24(Date.now(), 48),
                    this.plus24(Date.now(), 72),
                    this.plus24(Date.now(), 96),
                    this.plus24(Date.now(), 120),
                    this.plus24(Date.now(), 144),
                    this.plus24(Date.now(), 168)
                  ],
            info: {
                temperature: '-',
                description: '-',
                city: '-',
                country: '-',
                otherDays: []
            },
            coords: {
                latitude: null,
                longitude: null,
                error: {
                    message: null
                }
            }
        } 
    }

    plus24(prevProps, num) {
        return new Date(prevProps + (60*60*num*1000))
    }

    mainHandler = () => {
        const success = (pos) => {
            this.getWeatherHandler(pos.coords.latitude, pos.coords.longitude)
        },
        error = (err) => {
            this.setState({
                coords: {
                    error: {
                        message: err.message
                    }
                }
            })
        }
        navigator.geolocation.getCurrentPosition(success, error);
    }

    getWeatherHandler = (latitude, longitude) => {
        // const key = '8ff5dda3cbea5312ca0baf21e50b1728',
        const key2 = '0b789520c2175f25f7deeb51f642f7f9';
        // let locApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`,
        const weatherApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${key2}`;
        //     fetch(locApi) 
        // .then((response) => response.json())
        // .then((data) => {
        //     this.setState({
        //         info: {
        //             city: data.city.name,
        //             country: data.city.country
        //         }
        //     })
        //     console.log(data.city);
        // }) 
        return fetch(weatherApi) 
        .then((response) => response.json())
        .then((data) => {
            let dataArr = data.daily.concat();
            this.setState({
               info: {
                   temperature: Math.round(data.current.temp),
                   otherDays: dataArr,
                   description: data.current.weather[0].description
               }
            })
            console.log(data)
        }) 
    }

    componentDidMount() {
        this.mainHandler()
    }

    render () {
        return (
            <div className={classes.Weather}>
                <div className={classes.background}></div>
                <Window daysArr={this.state.days} 
                        tempValue = {this.state.info.temperature}
                        daysTemp = {this.state.info.otherDays}
                        error= {this.state.coords.error.message}
                        description={this.state.info.description}
                />
            </div>
        )
    }
}

export default Weather