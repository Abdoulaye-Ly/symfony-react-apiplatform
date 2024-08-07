import React from 'react';

const Field = ({ name, label, value, onChange,id, placeholder, type = "text", error = "" }) => {
    return (
        <div className="form-group col-sm-6">
            <label htmlFor="username">{label}</label>
            <input
                value={value}
                onChange={onChange}
                type={type} 
                placeholder={placeholder || label}
                name={name} 
                id={id}
                className="form-control is-invalid"
            />
            {error && <p className="invalid-feedback">{error}</p>}
        </div>
    )
}

export default Field;