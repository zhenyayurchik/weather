import React from 'react'
import {connect} from 'react-redux'


const Result = ({
    weather
}) => {

const celsiusTemp = Math.trunc(weather?.main?.temp - 273.15)
const weatherCondition = weather?.weather[0]?.main

    return weather ? (
    <div className="weather-wrapper">
        <div className="weather-card">
            <div className={`weather-card__icon ${weatherCondition}`}></div>
            <h1>{celsiusTemp}º</h1>
            <p>{weather.name}</p>
        </div>
    </div>
    ) : null
}


const mapStateToProps = state => ({
    weather: state.wheather.weatherForCurrentCity
})

export default connect(mapStateToProps, null)(Result)

