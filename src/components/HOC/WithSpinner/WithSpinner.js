import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./WithSpinnerStyles";

const WithSpinner = WrapperComponent => ({ isLoading, ...otherProps }) => {

    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrapperComponent {...otherProps} />
    )
}

export default WithSpinner