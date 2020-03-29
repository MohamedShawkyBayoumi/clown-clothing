import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIfCollectionsLoaded } from "../../utils/Memoization/shopSelectors";
import WithSpinner from "../../components/HOC/WithSpinner/WithSpinner";
import Collection from "./Collection";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIfCollectionsLoaded(state)
});

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(Collection);

export default CollectionContainer;