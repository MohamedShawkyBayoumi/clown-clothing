
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../utils/Memoization/shopSelectors";
import WithSpinner from "../HOC/WithSpinner/WithSpinner";
import CollectionsOverview from "./CollectionsOverview";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);


export default CollectionsOverviewContainer;


