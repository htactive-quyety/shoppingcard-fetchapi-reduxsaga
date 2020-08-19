import types from './actionType';

export const fetchProducts = (list) =>{
    return ({
        type: types.FETCH_PRODUCTS,
        payload: list
    })
}
export const fetchUser = (list) =>{
    return ({
        type: types.FETCH_PRODUCTS,
        payload: list
    })
}
// export const addUser = (name,address,phone,avatar,password) =>{
//     return ({
//         type: types.FETCH_PRODUCTS,
//         payload: name,address,phone,avatar,password
//     })
// }

// export const getIDProducts = (id) =>{
//     return ({
//         type: types.GETID_PRODUCTS,
//         payload: id
//     })
// }