import {
  GET_WEATHER,
  ERROR
} from './types'
import axios from 'axios'

export const getWeather = city => async dispatch => {
  try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8fdeccbc7ccbe8cb2ae95881194da7d7`)

    dispatch({
      type: GET_WEATHER,
      payload: res.data
    })

  } catch (error) {

    dispatch({
      type: ERROR,
      payload: true
    })

    setTimeout(() => {
      dispatch({
        type: ERROR,
        payload: false
      })
    }, 3000)
    
  }
}