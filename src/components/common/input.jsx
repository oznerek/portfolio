import React from 'react';

const Input = ({name, label, error, ...rest}) => {
    return (
        <span className="message__field">
            <label htmlFor={name} className="message__label">{label}</label>
            <input
            id={name}
            name={name}
            className="message__input"
            {...rest}
            />
            {error && <div className="validate"> {error} </div>}
      </span>
    )
}

export default Input;
