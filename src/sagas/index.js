import {put, call, all} from 'redux-saga/effects'
import {getListPD} from '../api/index'
import {fetchProducts} from '../actions'

export function* getDataFromAPi(){
    try {
        const data = yield getListPD();
        yield put(fetchProducts(data));
    } catch (error) {
        console.log(error);
    }
}

export default function* cardSagas() { 
    yield all([
        call(getDataFromAPi)
    ]);
}


