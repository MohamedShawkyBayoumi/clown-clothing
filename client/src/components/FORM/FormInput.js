import React from "react";
import "./FORM.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps} />
            {label && <label className={`${otherProps.value.langth ? 'shrink' : ''} form-input-label`}>{label}</label>}
        </div>
    );
}

export default FormInput;