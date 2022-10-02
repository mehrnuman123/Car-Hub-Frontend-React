import axios from 'axios'
import {
    ALL_CARS_REQUEST,
    ALL_CARS_SUCCESS,
    ALL_CARS_FAIL,
    ADMIN_CARS_REQUEST,
    ADMIN_CARS_SUCCESS,
    ADMIN_CARS_FAIL,
    ADMIN_CAR_REQUEST,
    ADMIN_CAR_SUCCESS,
    ADMIN_CAR_FAIL,
    DELETE_CAR_REQUEST,
    DELETE_CAR_SUCCESS,
    DELETE_CAR_FAIL,
    UPDATE_CAR_REQUEST,
    UPDATE_CAR_SUCCESS,
    UPDATE_CAR_FAIL,
    NEW_CAR_REQUEST,
    NEW_CAR_SUCCESS,
    NEW_CAR_FAIL,
    CLEAR_ERRORS,
    CAR_DETAILS_REQUEST,
    CAR_DETAILS_SUCCESS,
    CAR_DETAILS_FAIL

} from '../constants/carConstants'

export const getCars = (keyword = '', currentPage = 1, color, category) => async (dispatch) => {
    try {
        dispatch({ type: ALL_CARS_REQUEST })
        const { data } = await axios.get('/api/v1/cars')
        
        console.log(data)
        dispatch({
            type: ALL_CARS_SUCCESS,
            payload: data
        })
         console.log(data)
    } catch (error) {
        dispatch({
            type: ALL_CARS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete car (Admin)
export const deleteCar = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_CAR_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/car/${id}`)

        dispatch({
            type: DELETE_CAR_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_CAR_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update Car (ADMIN)
export const updateCar = (id, carData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_CAR_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/car/${id}`, carData, config)

        dispatch({
            type: UPDATE_CAR_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_CAR_FAIL,
            payload: error.response.data.message
        })
    }
}

// create car (admin)
export const newCar = (formData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_CAR_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/admin/new/car`, formData, config)

        dispatch({
            type: NEW_CAR_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_CAR_FAIL,
            payload: error.response.data.message
        })
    }
}

// car single car details
export const getCarDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type:  CAR_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/car/${id}`)

        dispatch({
            type: CAR_DETAILS_SUCCESS,
            payload: data.car
        })

    } catch (error) {
        dispatch({
            type:  CAR_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}
// all cars (admin)
export const getAdminCars = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_CARS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/cars`)

        dispatch({
            type: ADMIN_CARS_SUCCESS,
            payload: data.cars
        })

    } catch (error) {

        dispatch({
            type: ADMIN_CARS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErros = async(dispatch)=>{
dispatch({type:CLEAR_ERRORS })
}
