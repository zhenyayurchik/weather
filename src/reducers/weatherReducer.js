import {
    GET_WEATHER,
    ERROR
  } from '../actions/types'

const initialState = {
    weatherForCurrentCity: null,
    error: false,
    prevCities: localStorage.getItem("prev_cities")
}


export const weathrReducer = (state = initialState, action) => {

    const { type, payload } = action
   
    switch (type) {
        case GET_WEATHER:
            if(localStorage.getItem("prev_cities") === null){
                localStorage.setItem("prev_cities", (`${payload.name.toLowerCase()}`))
            } else {
                !localStorage.getItem("prev_cities").includes(payload.name.toLowerCase()) && localStorage.setItem("prev_cities", (`${localStorage.getItem("prev_cities")}, ${payload.name.toLowerCase()}`))
            }
            return {
                ...state,
                weatherForCurrentCity: payload,
                error: false,
                prevCities: localStorage.getItem("prev_cities")
            }
        case ERROR:
            return {
                ...state,
                error: payload
            }
        default: return state
    }
    
}