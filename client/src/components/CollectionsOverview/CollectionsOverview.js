import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

import { selectCollectionsForPreview } from "../../utils/Memoization/shopSelectors"
import { createStructuredSelector } from "reselect";

import "./collections-overview.scss";

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});


export default connect(mapStateToProps, null)(CollectionsOverview);