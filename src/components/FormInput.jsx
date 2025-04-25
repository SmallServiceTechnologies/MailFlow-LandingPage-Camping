import React from 'react';
import "../css/formInput.css"

const FormInput = ({
                       label,
                       type,
                       name,
                       value,
                       onChange,
                       placeholder,
                       required = false,
                       id,
                       className = "form-input",
                   }) => {
    return (
        <div className="form-input-wrapper">
            <label>
                {label}
                <input
                    className={className}
                    id={id}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                />
            </label>
        </div>
    );
};

export default FormInput;