import React, { useEffect, lazy, Suspense } from "react";

import { Route } from "react-router-dom";


// import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverviewContainer";
// import CollectionContainer from "../Collection/CollectionContainer";



import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/actions/shopActions";
import Spinner from "../../components/spinner/Spinner";


const CollectionsOverviewContainer = lazy(() => import("../../components/CollectionsOverview/CollectionsOverviewContainer"));
const CollectionContainer = lazy(() => import("../Collection/CollectionContainer"));


const ShopPage = ({ fetchCollectionsStart, match }) => {

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);


    return (
        <div className="shop-page">
            <Suspense fallback={<Spinner />}>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionContainer}
                />
            </Suspense>
        </div>
    );
}




const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);