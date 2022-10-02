import {
    ALL_CARS_REQUEST,
    ALL_CARS_SUCCESS,
    ALL_CARS_FAIL,
    CLEAR_ERRORS,
    NEW_CAR_REQUEST,
    NEW_CAR_SUCCESS, 
    NEW_CAR_RESET, 
    NEW_CAR_FAIL,
    DELETE_CAR_REQUEST,
    DELETE_CAR_RESET,
    DELETE_CAR_SUCCESS,
    DELETE_CAR_FAIL,
    UPDATE_CAR_REQUEST,
    UPDATE_CAR_RESET,
    UPDATE_CAR_SUCCESS,
    UPDATE_CAR_FAIL,
    CAR_DETAILS_REQUEST,
    CAR_DETAILS_SUCCESS,
    CAR_DETAILS_FAIL

    
} from'../constants/carConstants'


// all cars reducer
export const carsReducer= ( state = { cars: [] }, action)=>{
    switch (action.type) {
        case ALL_CARS_REQUEST:
            return{
                    loading: true,
                    cars:[]
            }
        case ALL_CARS_SUCCESS:
            return {
                 loading:false,
                 cars:action.payload.cars,
                 carsCount: action.payload. carsCount,
                 resPerPage: action.payload.resPerPage,
                 filteredCarsCount: action.payload.filteredCarsCount
            }
        case ALL_CARS_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        case CLEAR_ERRORS:{
            return {
                ...state,
                error:null
            }
        }
    default:
        return state 
    }
    
}
// new car reducer
export const newCarReducer = (state = { car: {} }, action) => {
    switch (action.type) {

        case NEW_CAR_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_CAR_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                car: action.payload.car
            }

        case NEW_CAR_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_CAR_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}


export const carReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_CAR_REQUEST:
        case UPDATE_CAR_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_CAR_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_CAR_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_CAR_FAIL:
        case UPDATE_CAR_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_CAR_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_CAR_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const carDetailsReducer = (state = {car: {} }, action) => {
    switch (action.type) {

        case CAR_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CAR_DETAILS_SUCCESS:
            return {
                loading: false,
                car: action.payload
            }

        case CAR_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}