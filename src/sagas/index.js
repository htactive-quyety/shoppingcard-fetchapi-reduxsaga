import {put, call, all, takeLatest, takeEvery} from 'redux-saga/effects'
import {getListPD,getListUser} from '../api/index'
import {fetchProducts,fetchUser} from '../actions'
import types from '../actions/actionType';

 function* getDataFromAPiPD(){
    try {
        const data = yield getListPD();
        yield put(fetchProducts(data));
    } catch (error) {
        console.log(error);
    }
}

// export function* getDataFromAPiUser(){
//     try {
//         const data = yield getListUser();
//         yield put(fetchUser(data));
//     } catch (error) {
//         console.log(error);
//     }
// }






//  function* watchToggleUser() { 
//     yield takeLatest(getDataFromAPiUser)
// }
// function* watchTogglePD() { 
//     yield takeEvery('FETCH_PRODUCTS',getDataFromAPiPD);
// }



export default function* cardSagas() { 
    yield all([
        call(getDataFromAPiPD)
    ]);
}

