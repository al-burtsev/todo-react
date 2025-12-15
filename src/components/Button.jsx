
const Button = ({ children, className = '', type = 'button', isDisabled, onClick }) => {
    return (
        <button
            className={`button ${className}`}
            type={type}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
}

export default Button