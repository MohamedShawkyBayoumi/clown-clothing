import { takeLatest, call, put, all } from "redux-saga/effects";

import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";

import { fetchCollectionsSuccess, fetchCollectionsFailure } from "../actions/shopActions";

export function* fetchCollectionsAsync(){
    try {
        const collectionRef = firestore.collection('collections');

        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest("FETCH_COLLECTIONS_START", fetchCollectionsAsync);
}


export function* shopSagas(){
    yield all([call(fetchCollectionsStart)]);
}