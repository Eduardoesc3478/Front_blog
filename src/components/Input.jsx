import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textArea,
    placeholder,
    disabled
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field)
    }

    const handleOnBlur = (event) => {
        onBlurHandler(event.target.value, field)
    }

    return (
        <>
            <div className='auth-form-label'>
                <label htmlFor={field}>{label}</label>
            </div>
            {textArea ? (
                <textarea
                    id={field}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleOnBlur}
                    rows={5}
                    placeholder={placeholder}
                    disabled={disabled}
                    style={{ maxWidth: '400px' }}
                />
            ) : (
                <input
                    id={field}
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleOnBlur}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            )}
            <span className='auth-form-validation-message'>
                {showErrorMessage && validationMessage}
            </span>
        </>
    )
}

Input.propTypes = {
    field: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    showErrorMessage: PropTypes.bool.isRequired,
    validationMessage: PropTypes.string.isRequired,
    onBlurHandler: PropTypes.func.isRequired,
    textArea: PropTypes.bool,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
}

Input.defaultProps = {
    textArea: false,
    placeholder: '',
    disabled: false
}
