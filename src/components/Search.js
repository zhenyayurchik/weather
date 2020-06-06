import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import { getWeather } from '../actions/actions'
 

const Search = ({
    getWeather,
    error,
    prevCities
}) => {

    const [cityName, setCityName] = useState('')
    const [citiesArr, setCitiesArr] = useState([])

    useEffect(() => {
      prevCities && setCitiesArr(prevCities.split(', '))
    }, [prevCities])

    const submit = e => {
        e.preventDefault()
        getWeather(cityName)
    }

    return (
        <>
            <form className="form" onSubmit={e => submit(e)}>
                <input 
                    type="text"
                    list="cities-list"
                    className="form__field"
                    placeholder="Введите город"
                    value={cityName}
                    onChange={e => setCityName(e.target.value)} 
                />
                <datalist id="cities-list">
                    {citiesArr.length !== 0 ? citiesArr.map(city => (
                        <option value={city} key={city}></option>
                    )) : null}
                </datalist>
                {error ? <p>Мы не смогли найти такой город. Попробуйте ещё раз.</p> : null}
                <button 
                    type="submit" 
                    className="form__btn"
                >Узнать погоду</button>
            </form>
        </>
    )
}

const mapStateToProps = state => ({
    error: state.wheather.error,
    prevCities: state.wheather.prevCities
})

export default connect(
    mapStateToProps,
    {
        getWeather
    }
)(Search)
