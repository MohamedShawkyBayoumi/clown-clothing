import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";


export const fetchCollectionsStart = () => ({
    type: "FETCH_COLLECTIONS_START"
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: "FETCH_COLLECTIONS_SUCCESS",
    payload: collectionsMap
});


export const fetchCollectionsFailure = errorMessage => ({
    type: "FETCH_COLLECTIONS_FAILURE",
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => dispatch => {

    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        // updateCollections(collectionsMap);
        dispatch(fetchCollectionsSuccess(collectionsMap))
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
}