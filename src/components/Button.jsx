
const Button = ({ children, className = '', type = 'button', onClick }) => {
    return (
        <button
            className={`button ${className}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button