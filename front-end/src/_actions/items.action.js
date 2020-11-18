import API from '../_service/api'
import { toast } from 'react-toastify';

const getItems = () => {

    return dispatch => {
        dispatch({
            type: 'GET_ITEMS_REQUEST'
        })
        API.get('todos?_limit=10').then(res => {
            dispatch({
                type: 'GET_ITEMS_SUCCESS',
                payload: res.data,
            })
        }).catch((e) => {
            errorHanddler(dispatch, e.message, 'GET_ITEMS_FAIL')
        })
    }
}

const addItems = (data) => {
    return dispatch => {
        dispatch({
            type: 'ADD_ITEMS_REQUEST'
        })
        API.post('todos', data).then(res => {
            dispatch({
                type: 'ADD_ITEMS_SUCCESS',
                payload: res.data,
            })
        }).catch((e) => {
            errorHanddler(dispatch, e.message, 'ADD_ITEMS_FAIL')
        })
    }
}

const updateItems = (values, id) => {
    return dispatch => {
        dispatch({
            type: 'UPDATE_ITEMS_REQUEST'
        })
        API.put('todos/' + id, values).then(res => {
            dispatch({
                type: 'UPDATE_ITEMS_SUCCESS',
                payload: res.data,
            })
        }).catch((e) => {
            errorHanddler(dispatch, e.message, 'UPDATE_ITEMS_FAIL')
        })
    }
}

const errorHanddler = (dispatch, message, type) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    dispatch({ type: type });
}

export default {
    getItems,
    addItems,
    updateItems
}
