import React, { Component } from "react";
import "./directory.scss";
import MenuItem from "../MenuItem/MenuItem";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../utils/Memoization/directorySelector";

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(({id, ...restProps}) => (
            <MenuItem 
                key={id}
                {...restProps}
            />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});


export default connect(mapStateToProps, null)(Directory);