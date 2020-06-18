import React from 'react';

const Textarea = ({name, label, error, ...rest}) => {
    return (
        <span className="message__field">
            <label htmlFor={name} className="message__label">{label}</label>
            <textarea
            id={name}
            name={name}
            className="message__input  message__input-message"
            {...rest}
            />
            {error && <div className="validate"> {error} </div>}
      </span>
    )
}

export default Textarea;
