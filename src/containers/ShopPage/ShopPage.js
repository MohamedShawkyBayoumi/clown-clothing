import React from "react";

import { Route } from "react-router-dom";


import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverviewContainer";
import CollectionContainer from "../Collection/CollectionContainer";

import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/actions/shopActions";





class ShopPage extends React.Component {

    componentDidMount(){
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render(){
        const { match, isCollectionsLoaded } = this.props;

        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionContainer}
                />
            </div>
        );
    }
}




const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);