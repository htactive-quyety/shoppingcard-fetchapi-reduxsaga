import types from './actionType';

export const fetchProducts = (list) =>{
    return ({
        type: types.FETCH_PRODUCTS,
        payload: list
    })
}

// export const getIDProducts = (id) =>{
//     return ({
//         type: types.GETID_PRODUCTS,
//         payload: id
//     })
// }