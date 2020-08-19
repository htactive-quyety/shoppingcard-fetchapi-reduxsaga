import { call, all} from 'redux-saga/effects'
import cardSagas from './sagas';

export function* rootSaga(){
    yield all ([
        cardSagas()
    ]);
}