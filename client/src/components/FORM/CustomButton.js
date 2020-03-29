import React from "react";

import "./FORM.scss";

import { CustomButtonContainer } from "./CustomButtonStyles";

const CustomButton = ({ children, ...props }) => {
    return (
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    );
}

export default CustomButton;